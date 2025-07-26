
import React, { useContext } from "react";
import { WishlistCartContext } from "../wishlist/WishlistCartContext";

export default function Wishlist() {
  const { wishlist, handleRemoveFromWishlist } = useContext(WishlistCartContext);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-lavender p-6 font-poppins text-center">
        <h1 className="text-2xl font-semibold">Your Wishlist is empty.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lavender p-6 font-poppins">
      <h1 className="text-3xl font-semibold mb-6">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600 mb-2">{item.price}</p>
            <button
              onClick={() => handleRemoveFromWishlist(item.id)}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
