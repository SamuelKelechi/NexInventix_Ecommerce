import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem("cart"));
      if (savedCart && Array.isArray(savedCart)) {
         setCart(savedCart);
      } else {
         setCart([]);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);





   const updateCart = (product) => {
      setCart((prevCart) => {
         const existngproduct = prevCart.find((item) => item.id === product.id);
         if (existngproduct) {
            return prevCart.map((item) =>
               item.id === product.id ? { ...existngproduct, quantity: existngproduct.quantity + 1 } : item
            );
         }
         const updated = [...prevCart, { ...product, quantity: 1 }];
         return updated;
      });
   };

   const removeFromCart = (productId) => {
      setCart((prevCart) => {
         const updated = prevCart.filter((item) => item.id !== productId);
         localStorage.setItem("cart", JSON.stringify(updated));
         return updated;
      });
   };

   return (
      <AppContext.Provider value={{ cart, updateCart, removeFromCart }}>
         {children}
      </AppContext.Provider>
   );
};

export default AppProvider;
