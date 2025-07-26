

import { useLocation, useNavigate } from "react-router-dom";
import orderimg from '../../assets/images/orderconfirmed.PNG';

const OrderConfirmed = () => {
  const navigate = useNavigate();

  const orderData = JSON.parse(localStorage.getItem("orderData")) || {};
  const cart = orderData.cart || [];
  const subtotal = orderData.subtotal || 0;
  const orderId = orderData.orderId || Math.floor(100000 + Math.random() * 900000);
  const userEmail = orderData.userEmail || "guest@example.com";
  
  const shipping = 50;
  const discount = 0;
  const tax = 0;
  const totalAmount = subtotal + shipping + tax - discount;
  const firstName = userEmail.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-24 text-black font-poppins mt-10">
      <div className="flex flex-col items-center">
        <img
          src={orderimg}
          alt="Order Confirmed"
          className="w-56 h-38 mb-4"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-8 mt-8">
        {/* First Row */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-3xl font-bold">Your Order</h3>
          <p className="text-xl font-bold">Order ID: #{orderId}</p>
          <p className="text-xl font-bold">Thank you! Your order has been confirmed.</p>
        </div>
        <div className="space-y-2 border-2 border-white rounded-md p-4">
          <h4 className="font-semibold text-lg">Customer</h4>
          <p className="text-base font-semibold text-gray-600">Name: {firstName}</p>
          <p className="text-base font-semibold text-gray-600">Order : 1</p>
        </div>

        {/* Second Row */}
        <div className="lg:col-span-2 space-y-2 border-2 border-white rounded-md p-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 italic">No product info available.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-24 h-18" />
                <p className="text-2xl font-semibold text-black bg-yellow-500 px-2 py-2 m-2">ID: {item.id}</p>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
            ))
          )}
        </div>

        <div className="space-y-2 border-2 border-white rounded-md p-4">
          <h4 className="font-semibold">Customer Info</h4>
          <p className="text-base font-semibold text-gray-600">Email: {userEmail}</p>
          <p className="text-base font-semibold text-gray-600">Order: 1</p>
        </div>

        {/* Third Row */}
        <div className="lg:col-span-2 space-y-2 border-2 border-white rounded-md p-4">
          <h4 className="font-semibold">Order Summary</h4>
          <div className="flex justify-between"><p>Subtotal</p><p>₹{subtotal}</p></div>
          <div className="flex justify-between"><p>Shipping Charges</p><p>₹{shipping}</p></div>
          <div className="flex justify-between"><p>Taxes</p><p>₹{tax}</p></div>
          <div className="flex justify-between border-b-2 border-gray-600"><p>Discount</p><p>- ₹{discount}</p></div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold"><p>Total</p><p>₹{totalAmount}</p></div>
        </div>

        <div className="space-y-2 border-2 border-white rounded-md p-4">
          <h4 className="font-semibold">Shipping Address</h4>
          <p className="text-base font-semibold text-gray-600">1234 Wedding Street, Celebration City</p>
          <h4 className="font-semibold mt-2">Billing Address</h4>
          <p className="text-base font-semibold text-gray-600">Same as Shipping Address</p>
        </div>
      </div>

      <div className="flex justify-center mt-16 mb-16">
        <button
          className="bg-yellow-500 text-xl text-black font-bold px-6 py-2 rounded hover:bg-yellow-500"
          onClick={() => navigate("/wedding-invitation")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
