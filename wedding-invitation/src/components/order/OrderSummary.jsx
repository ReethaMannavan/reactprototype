// src/pages/OrderSummary.jsx
import React, { useContext } from "react";
import { WishlistCartContext } from "../wishlist/WishlistCartContext";
import { Link } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaGooglePay, FaExclamationCircle } from "react-icons/fa";
import { SiPhonepe, SiRazorpay } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";



import visaImg from "../../assets/icons/visa.png";
import mastercardImg from "../../assets/icons/mastercard.png";
import paypalImg from "../../assets/icons/paypal.png";
import gpayImg from "../../assets/icons/gpay.png";
import upiImg from "../../assets/icons/upi.png";
import phonepeImg from "../../assets/icons/phonepe.png";
import paytmImg from "../../assets/icons/paytm.png";
import creditCardImg from "../../assets/icons/cred.png";



const OrderSummary = () => {
  const { cart,clearCart } = useContext(WishlistCartContext);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCharge = subtotal > 0 ? 50 : 0;
  const totalAmount = subtotal + shippingCharge;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

const handlePay = () => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const orderId = Math.floor(100000 + Math.random() * 900000);
  const userEmail = localStorage.getItem("userEmail") || "guest@example.com";

  const orderData = {
    cart,
    subtotal,
    orderId,
    userEmail,
  };

  // Store orderData temporarily in localStorage
  localStorage.setItem("orderData", JSON.stringify(orderData));

  clearCart(); // clear AFTER storing
  navigate("/orderconfirmed");
};


  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Left Column - Payment Methods */}
      <div className="bg-gray-50 rounded-2xl shadow-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>

        {/* Top Row Icons */}
        <div className="flex items-center gap-12 text-3xl text-gray-700">
           <img src={mastercardImg} alt="Mastercard" className="w-28 h-16 object-contain" />
         <img src={visaImg} alt="Visa" className="w-28 h-16 object-contain" />
 
  <img src={paypalImg} alt="Paypal" className="w-28 h-16object-contain" />
  <img src={upiImg} alt="UPI" className="w-28 h-16 object-contain" />
        </div>

        {/* Payment Options */}
        <div className="space-y-3 mt-4">
          <label className="flex justify-between items-center border px-4 py-2 rounded-xl">
            <span className="flex items-center gap-2">
              <input type="radio" name="payment" className="accent-black" />
              Paytm
            </span>
            <img src={paytmImg} alt="UPI" className="w-28 h-10 object-contain" />
          </label>

          <label className="flex justify-between items-center border px-4 py-2 rounded-xl">
            <span className="flex items-center gap-2">
              <input type="radio" name="payment" className="accent-black" />
              GPay
            </span>
           <img src={gpayImg} alt="UPI" className="w-28 h-10 object-contain" />
          </label>

          <label className="flex justify-between items-center border px-4 py-2 rounded-xl">
            <span className="flex items-center gap-2">
              <input type="radio" name="payment" className="accent-black" />
              PhonePe
            </span>
           <img src={phonepeImg} alt="UPI" className="w-28 h-10 object-contain" />
          </label>

          <label className="flex items-center gap-2 border px-4 py-2 rounded-xl">
            <input type="radio" name="payment" className="accent-black" />
            Credit Card
          </label>

          <label className="flex items-center gap-2 border px-4 py-2 rounded-xl">
            <input type="radio" name="payment" className="accent-black" />
            Cash on Delivery
          </label>
        </div>

        {/* Notes */}
        <div className="flex items-start gap-2 text-sm text-gray-600 mt-4">
          <FaExclamationCircle className="text-blue-400 mt-1" />
          Please ensure your UPI/Wallet account is active during checkout.
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" className="accent-blue-400" />
          I agree to terms & conditions.
        </label>
      </div>

      {/* Right Column - Order Summary */}
      <div className="bg-gray-50 rounded-2xl shadow-lg p-6 space-y-4">
        <h2 className="text-3xl font-semibold mb-4 text-center border-b-2 border-black">Order Summary</h2>

        <div className="flex justify-between">
          <span className="text-black">Date</span>
          <span>{formattedDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-black">Time</span>
          <span>{formattedTime}</span>
        </div>

        <hr />

        <h3 className="text-2xl font-bold text-black">Product Details</h3>
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <span>{item.title}</span>
            <span>Qty: {item.quantity}</span>
          </div>
        ))}

        {/* Complimentary line */}
        <div className="flex justify-between text-sm">
          <span>Compliment</span>
          <span>Holdbag</span>
        </div>

        {/* Coupon */}
        <div className="flex justify-between text-sm">
          <span>Coupon</span>
          <span>None</span>
        </div>

        {/* Subtotal and Shipping */}
        <div className="flex justify-between font-medium pt-2 border-t">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Shipping</span>
          <span>{shippingCharge > 0 ? `₹${shippingCharge}` : "Free"}</span>
        </div>

        <hr />

        <div className="flex justify-between items-center text-lg font-bold text-yellow-500">
          <span>Total Payable</span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>

<Link to = '/orderconfirmed'>
        <button onClick={handlePay} className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-3 rounded-xl text-lg font-medium mt-2">
          Pay ₹{totalAmount.toFixed(2)}
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
