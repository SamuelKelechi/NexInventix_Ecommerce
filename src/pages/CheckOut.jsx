import React, { useContext, useState } from 'react';
import { AppContext } from '../global/AppContext';
import '../styles/checkout.css';

const CheckOut = () => {
   const { cart } = useContext(AppContext);
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
   })
   console.log(cart)

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      })
   }

   const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
   const tax = subtotal * 0.05;
   const total = subtotal + tax;

   const validateForm = (e) => {
      e.preventDefault()
      if (!formData.address || !formData.email || !formData.firstName || !formData.lastName || !formData.address) {
         alert("all fields are required")
         return false
      }
      else {
         alert("form submitted successfully")
         return true
      }
   }

   function handleSubmit() {
      if (validateForm) {
         window.Korapay.initialize({
            key: "pk_test_BGWh25jnkGF3Ddq1nYQAdUFMbf4otQ896XkqLEmR",
            reference: "unique-transaction-ref",
            amount: Math.round(total * 100),
            currency: "NGN",
            customer: {
               name: `${formData.firstName} ${formData.lastName}`,
               email: formData.email
            },
            notification_url: "https://your-domain.com/webhook"
         });
      }
   }


   return (
      <div className="checkout-container">
         <div className="checkout-wrapper">
            <h1 className="checkout-header">Secure Checkout</h1>

            <div className="checkout-form-grid">

               <div className="form-details-column">
                  <div className="form-card">
                     <h2 className="form-card-header">1. Shipping Information</h2>

                     <div className="form-group">
                        <label className="form-label">Email address</label>
                        <input
                           type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className="form-input"
                           placeholder="you@example.com"
                        />
                     </div>

                     <div className="form-grid-2-cols">
                        <div className="form-group-half">
                           <label className="form-label">First Name</label>
                           <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                              className="form-input"
                           />
                        </div>

                        <div className="form-group-half">
                           <label className="form-label">Last Name</label>
                           <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                              className="form-input"
                           />
                        </div>

                        <div className="form-group form-span-full">
                           <label className="form-label">Street address</label>
                           <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              required
                              className="form-input"
                           />
                        </div>
                     </div>
                  </div>

                  <div className="form-card">
                     <h2 className="form-card-header">2. Payment Method</h2>
                     <p style={{ fontSize: "14px", opacity: 0.6 }}>
                        💳 Card payment will be handled securely by KoraPay.
                     </p>
                  </div>
               </div>

               <div className="order-summary-column">
                  <div className="order-summary-card">

                     <h2 className="order-summary-header">Order Summary</h2>

                     <ul className="item-list">
                        {cart.length === 0 ? (
                           <li>No items in cart.</li>
                        ) : (
                           cart.map(item => (
                              <li key={item.id} className="item-list-row">
                                 <span>{item.title} (x{item.quantity})</span>
                                 <span>${(item.price * item.quantity).toFixed(2)}</span>
                              </li>
                           ))
                        )}
                     </ul>

                     <div className="price-breakdown">
                        <div className="price-breakdown-row">
                           <span>Subtotal</span>
                           <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="price-breakdown-row">
                           <span>Tax (5%)</span>
                           <span>${tax.toFixed(2)}</span>
                        </div>
                     </div>

                     <div className="order-total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                     </div>

                     <button
                        type="submit"
                        className="place-order-btn"
                        onClick={handleSubmit}
                     >
                        Pay ${total.toFixed(2)}
                     </button>

                     <p className="security-message">🔒 100% Secure Payment</p>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};

export default CheckOut;