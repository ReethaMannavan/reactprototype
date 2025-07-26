
// src/pages/HinduWeddingCardsPage.jsx
import React, { useContext } from "react";
import { WishlistCartContext } from "../wishlist/WishlistCartContext";
import { toast } from "react-hot-toast";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import HinduCardsData from "../data/HinduCards";
import { useNavigate } from "react-router-dom";

export default function HinduWeddingCardsPage() {
  const {
    wishlist,
    addToWishlist,
    handleRemoveFromWishlist,
    isInWishlist,
    handleAddToWishlist
  } = useContext(WishlistCartContext);

 const loggedInUser = localStorage.getItem("loggedInUser");

const navigate = useNavigate();
 

// const toggleWishlist = (card) => {
//   if (isInWishlist(card.id)) {
//     handleRemoveFromWishlist(card.id); // now with toast ✅
//   } else {
//     handleAddToWishlist(card); // already includes login + toast
//   }
// };

 const toggleWishlist = (card) => {
    if (isInWishlist(card.id)) {
      handleRemoveFromWishlist(card.id);
    } else {
      const result = handleAddToWishlist(card, loggedInUser);
      if (!result.success && result.message === "Please login first to add to wishlist") {
        toast.error(result.message);
        navigate("/loginsignup");
      }
    }
  };


  return (
    <div className="bg-lavender min-h-screen py-10 px-6 font-poppins">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Hindu Wedding Cards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {HinduCardsData.map((card) => {
          const inWishlist = isInWishlist(card.id);
          return (
            <div
              key={card.id}
              className="bg-white relative p-6 rounded-2xl shadow-2xl hover:bg-[#FFE5B4] transition duration-300 flex flex-col items-center w-72 h-96"
            >
              {/* Wishlist Icon */}
              <div
                onClick={() => toggleWishlist(card)}
                className="absolute top-3 right-3 bg-gray-100 hover:bg-red-100 p-2 rounded-full shadow cursor-pointer select-none"
                title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                {inWishlist ? (
                  <FaHeart className="text-red-500 text-xl" />
                ) : (
                  <FaRegHeart className="text-gray-500 text-xl" />
                )}
              </div>

              {/* Clickable Card */}
              <Link
                to={`/product/${card.id}`}
                className="flex flex-col items-center w-full"
                onClick={() =>
                  localStorage.setItem("selectedProduct", JSON.stringify(card))
                }
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-62 h-52 object-cover rounded-lg mb-4 mt-10"
                />
                <h2 className="text-lg font-semibold text-center">{card.title}</h2>
                <p className="text-base text-red-600 font-semibold mt-1">
                  ₹{card.price.toFixed(2)}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
