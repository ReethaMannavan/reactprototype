import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { WishlistCartContext } from "../wishlist/WishlistCartContext";
import { SearchContext } from "../search/SearchContext.jsx";
import logo from '../../assets/images/logonew.PNG'

const navItems = [
  { name: "Home", path: "/" },
  { name: "Wedding Invitation", path: "/wedding-invitation" },
  {
    name: "Special occasions",
    dropdown: [
      { name: "Birthday Invitations", path: "/special/birthday" },
      { name: "Puberty Cards", path: "/special/anniversary" },
      { name: "Luxury Invitations", path: "/special/baby-shower" },
      { name: "Ear Boring Cards", path: "/special/housewarming" },
      { name: "Engagement Cards", path: "/special/graduation" },
      { name: "House Warming", path: "/special/engagement" },
      { name: "Anniversary Cards", path: "/special/retirement" },
    ],
  },
  {
    name: "Theme Cards",
    dropdown: [
      { name: "Beach Theme Cards", path: "/themes/rustic" },
      { name: "Bride Theme Cards", path: "/themes/modern" },
      { name: "Box Cards", path: "/themes/classic" },
      { name: "Single Sheet", path: "/themes/classic" },
    ],
  },
  {
    name: "Scroll Invitation",
    dropdown: [
      { name: "Small Scroll", path: "/scroll/velvet" },
      { name: "Box Scroll", path: "/scroll/royal" },
      { name: "Only Scroll", path: "/scroll/minimal" },
      { name: "High End Scroll", path: "/scroll/minimal" },
    ],
  },
  {
    name: "Digital Invitation",
    dropdown: [
      { name: "Whatsapp Cards", path: "/digital/e-card" },
      { name: "Save the Date", path: "/digital/video" },
      
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [dropdownOpen, setDropdownOpen] = useState(false);
    const [cartModalOpen, setCartModalOpen] = useState(false); 
    
       const { cart, removeFromCart } = useContext(WishlistCartContext);
  const userEmail = localStorage.getItem("loggedInUser");

  const navigate = useNavigate();
  const { wishlist } = useContext(WishlistCartContext);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const { setSearchTerm } = useContext(SearchContext);

  const handleSearch = () => {
    setSearchTerm(search); 
    navigate("/search"); 
  };


  const calculateSubtotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const calculateTax = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity * (item.taxRate || 0), 0);

  const subtotal = calculateSubtotal();
  const tax = calculateTax();
  const total = subtotal + tax;



  return (
    <header className="bg-[#E6E6FA] font-poppins top-0 z-50 mb-2">
      {/* Top header */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-22 w-auto" />

        {/* Desktop Search + Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search wedding cards..."
              value={search} // <-- local state
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch(); // This sets the global context value and navigates
                }
              }}
              className="px-4 py-2 border border-gray-300 rounded-md w-full max-w-md outline-none focus:ring-2 focus:ring-amber-500"
            />

            <FaSearch className="absolute top-3 right-3 text-black cursor-pointer" />
          </div>

          {userEmail ? (
            <div className="relative flex items-center gap-2 cursor-pointer">
              {/* Welcome message */}
              <span
                className="text-sm text-gray-700"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                Welcome, {userEmail}
              </span>

              {/* User Icon */}
              <div
                className="p-2 rounded-md hover:bg-blue-500 transition"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <FaUser className="text-2xl text-gray-700 hover:text-white" />
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border shadow-md rounded w-40 z-50">
                  <button
                    onClick={() => {
                      localStorage.removeItem("loggedInUser");
                      setDropdownOpen(false);
                      navigate("/loginsignup");
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Switch Account
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("loggedInUser");
                      setDropdownOpen(false);
                      navigate("/");
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/loginsignup"
              className="p-2 rounded-md hover:bg-blue-500 transition"
            >
              <FaUser className="text-2xl text-gray-700 hover:text-white" />
            </Link>
          )}

          <Link to="/wishlist">
            <div className="relative cursor-pointer">
              <FaHeart className="text-2xl text-red-600" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>
          </Link>

        

          {/* Cart Icon with badge and click handler */}
      <div className="relative cursor-pointer" onClick={() => setCartModalOpen(true)}>
        <FaShoppingCart className="text-2xl text-gray-700" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {/* {cart.length} */}
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        )}
      </div>

      {/* Cart Modal */}
      {cartModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setCartModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-4 max-h-72 overflow-y-auto">
                  {cart.map((item) => (
  <div key={item.id} className="flex justify-between items-center border-b pb-2">
    <div>
      <p className="font-semibold">{item.title || item.name}</p>
      <p className="text-sm text-gray-600">SKU: {item.sku || item.id}</p>
      <p className="text-sm">
        Qty: {item.quantity} × ₹{item.price.toFixed(2)}
      </p>
    </div>
    <div className="text-right">
      <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
      <button
        className="text-red-500 text-sm mt-1 underline"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  </div>
))}


                </div>

                <div className="border-t mt-4 pt-4 space-y-2 text-right">
                  <p>
                    <span className="font-semibold">Subtotal: </span>₹{subtotal.toFixed(2)}
                  </p>
                  <p>
                    <span className="font-semibold">Tax: </span>₹{tax.toFixed(2)}
                  </p>
                  <p className="text-lg font-bold">
                    Total: ₹{total.toFixed(2)}
                  </p>
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                    onClick={() => setCartModalOpen(false)}
                  >
                    Continue Shopping
                  </button>
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    onClick={() => {
                      setCartModalOpen(false);
                      navigate("/ordersummary"); // Your checkout page route
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}






        </div>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden">
          {mobileOpen ? (
            <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`lg:flex justify-center gap-12 py-3 text-black font-semibold text-2xl transition-all duration-300 ${
          mobileOpen ? "block px-6 pb-4" : "hidden lg:block"
        }`}
      >
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            {item.path ? (
              <Link to={item.path} className="cursor-pointer">
                {item.name}
              </Link>
            ) : (
              <span className="cursor-pointer">{item.name}</span>
            )}

            {item.dropdown && (
              <div className="absolute hidden group-hover:block top-full mt-2 bg-[#FFE5B4] shadow-lg rounded p-2 min-w-[200px] z-50">
                {item.dropdown.map((sub, idx) => (
                  <Link
                    key={idx}
                    to={sub.path}
                    className="block px-4 py-2 hover:bg-orange-500 cursor-pointer"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

