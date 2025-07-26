
import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WishlistCartContext } from "../wishlist/WishlistCartContext";

import variantImg from "../../assets/images/variantcard.PNG";

import cards from "../data/HinduCards";

export default function ProductDescription() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { addToCart } = useContext(WishlistCartContext);
  const userEmail = localStorage.getItem("loggedInUser");
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
const { cart, removeFromCart } = useContext(WishlistCartContext);
  // Find the product by id param
  const product = cards.find((c) => c.id === id);

  // If product not found show message
  if (!product) return <div className="p-6 text-center">Product not found</div>;

  // State for image thumbnails - fallback to product.images or main image
  const thumbnails = product.thumbnails || [product.image];

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [activeIndex, setActiveIndex] = useState(0);

  // Reset selected image and activeIndex if product changes (route changes)
  useEffect(() => {
    setSelectedImage(product.image);
    setActiveIndex(0);
    setQuantity(1);
  }, [product]);

const handleAddToCart = () => {
  if (!userEmail) {
    alert("Please login first");
    navigate("/loginsignup");
    return;
  }

  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity,
    image: selectedImage,
    taxRate: product.taxRate || 0,
    sku: product.sku,
  };

  if (quantity > 0) {
  addToCart(newItem);
} else {
  alert("Item not added. Quantity is 0.");
}

};


  const handleBuyNow = () => {
    if (!userEmail) {
      alert("Please login first");
      navigate("/loginsignup");
      return;
    }
    handleAddToCart();
    navigate("/ordersummary");
  };

  
  return (
    <div className="px-6 py-12 font-poppins text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side: Thumbnails + Main Image */}
        <div className="col-span-2 flex gap-6 items-start pl-8">
          <div className="flex flex-col gap-4 w-[80px]">
            {thumbnails.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={`rounded-lg shadow w-full cursor-pointer border-2 transition-all duration-200 ${
                  activeIndex === idx ? "border-blue-500 scale-105" : "border-transparent"
                }`}
                onClick={() => {
                  setSelectedImage(img);
                  setActiveIndex(idx);
                }}
              />
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Product"
              className="w-full max-w-md rounded-lg shadow-md transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-1 space-y-4 pr-2">
          <p className="text-sm text-gray-500">SKU Code: {product.sku || product.id}</p>
          <h2 className="text-2xl font-bold text-red-600">₹{product.price}</h2>
          <p className="text-sm text-gray-600">Per unit inclusive of all taxes</p>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="font-semibold">Quantity:</span>
            <div className="flex items-center border border-gray-400 rounded">


          <button
  className="px-3 py-1"
  onClick={() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      // Remove from cart if already in it
      const existingIndex = cart.findIndex((item) => item.id === product.id);
      if (existingIndex >= 0) {
        const updatedCart = [...cart];
        updatedCart.splice(existingIndex, 1);
        setCart(updatedCart);
      }
      setQuantity(1); // Reset quantity to 1 for UI
      alert("Item removed from cart");
    }
  }}
>
 

                -
              </button>
              <span className="px-4 py-1 border-x border-gray-400">{quantity}</span>
              <button className="px-3 py-1" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <button
              className="bg-gray-800 text-white px-6 py-2 rounded shadow hover:bg-gray-900"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          {/* Variant */}
          <div className="mt-4">
            <p className="font-semibold">Variants:</p>
            <img src={variantImg} alt="variant" className="w-20 h-20 mt-2 rounded-lg border" />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 space-y-8">
        <div className="grid md:grid-cols-2 gap-8 border-t pt-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">Description</h3>
      
            <p className="text-black font-semibold">{product.description}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">Additional Information</h3>
            <ul className="list-disc list-inside text-black font-semibold">
              <li>Height: {product.height}</li>
              <li>Width: {product.width}</li>
              <li>Weight: {product.weight}</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 border-t pt-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-gray-600 pb-2">Additional Comments</h3>
            <p className="text-black font-semibold">{product.comments}</p>
          </div>
          <div className="flex items-end justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-yellow-500 text-black font-bold px-6 py-2 rounded shadow hover:bg-yellow-400 "
            >
              The Wedding Details
            </button>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96 relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
              <h3 className="text-lg font-bold mb-4">Wedding Details</h3>
              <p>
                Customize your wedding card with your own message, couple names,
                venue, and date. We’ll reach out to finalize the design with you.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
