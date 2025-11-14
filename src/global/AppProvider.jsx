import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children, products }) => {
   const [cart, setCart] = useState([]);

   // Load cart from localStorage on mount
   useEffect(() => {
      try {
         const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
         // Merge with server products
         const mergedCart = savedCart
            .map((savedItem) => {
               const product = products.find(
                  (p) => p.id.toString() === savedItem.id.toString()
               );
               return product ? { ...product, quantity: savedItem.quantity } : null;
            })
            .filter(Boolean);
         setCart(mergedCart);
      } catch {
         setCart([]);
      }
   }, [products]);

   // Save cart to localStorage whenever it changes
   useEffect(() => {
      // Save only id and quantity
      const cartToSave = cart.map((item) => ({
         id: item.id,
         quantity: item.quantity,
      }));
      localStorage.setItem("cart", JSON.stringify(cartToSave));
   }, [cart]);

   const updateCart = (product) => {
      setCart((prevCart) => {
         const existingProduct = prevCart.find(
            (item) => item.id.toString() === product.id.toString()
         );
         if (existingProduct) {
            return prevCart.map((item) =>
               item.id.toString() === product.id.toString()
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            );
         }
         return [...prevCart, { ...product, quantity: 1 }];
      });
   };

   const removeFromCart = (productId) => {
      setCart((prevCart) =>
         prevCart.filter((item) => item.id.toString() !== productId.toString())
      );
   };

   return (
      <AppContext.Provider value={{ cart, updateCart, removeFromCart }}>
         {children}
      </AppContext.Provider>
   );
};

export default AppProvider;
