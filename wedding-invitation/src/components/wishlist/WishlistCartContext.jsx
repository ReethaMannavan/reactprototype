
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";


export const WishlistCartContext = createContext();

export const WishlistCartProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch {
      return [];
    }
  });

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 

  const isInWishlist = (itemId) => wishlist.some((i) => i.id === itemId);

 
  const addToCart = (item) => {
  if (item.quantity <= 0) {
    setCart((prev) => prev.filter((i) => i.id !== item.id));
    return;
  }

  setCart((prev) => {
    const exists = prev.find((i) => i.id === item.id);
    if (exists) {
      return prev.map((i) =>
        i.id === item.id ? { ...i, quantity: item.quantity } : i
      );
    } else {
      return [...prev, item];
    }
  });
};


  const removeFromCart = (itemId) => {
     console.log("Removing from cart:", itemId);
    setCart((prev) => prev.filter((i) => i.id !== itemId));
  };

  const isInCart = (itemId) => cart.some((i) => i.id === itemId);

  const clearCart = () => {
  setCart([]);
  localStorage.setItem("cart", JSON.stringify([]));
};



const handleAddToWishlist = (card, userEmail) => {
  if (!userEmail) {
    return { success: false, message: "Please login first to add to wishlist" };
  }

  if (!wishlist.some(item => item.id === card.id)) {
    const updatedWishlist = [...wishlist, card];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.success("Added to wishlist!");
    return { success: true };
  }

  return { success: false, message: "Already in wishlist" };
};


const handleRemoveFromWishlist = (id) => {
  const updatedWishlist = wishlist.filter(item => item.id !== id);
  setWishlist(updatedWishlist);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  toast.success("Removed from wishlist");
};



  return (
    <WishlistCartContext.Provider
      value={{
        wishlist,
        cart,
        handleRemoveFromWishlist,
        isInWishlist,
        addToCart,
        removeFromCart,
        isInCart,
         clearCart,
         handleAddToWishlist,
      }}
    >
      {children}
    </WishlistCartContext.Provider>
  );
};
