import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaCopyright
} from "react-icons/fa";
import { Link } from "react-router-dom";
import footerlogo from '../../assets/images/footerlogo.PNG'

const Footer = () => {
  return (
    <footer className="w-full bg-[#fde3b8] text-black px-4 md:px-16 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 font-semibold">
        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={footerlogo}
            alt="Wed Knot Crafts Logo"
            className="w-36 h-auto mb-4"
          />
          <p className="font-semibold text-center">
            Largest Wedding <br/>Cards Collections in <br/>Chennai
          </p>
          <p className="mt-4 font-semibold">Follow us with</p>
          <div className="flex space-x-4 mt-2">
            <FaInstagram className="text-pink-600 text-xl" />
            <FaFacebookF className="text-blue-600 text-xl" />
            <FaYoutube className="text-red-600 text-xl" />
            <FaWhatsapp className="text-green-600 text-xl" />
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-3xl font-bold mb-4">Information</h3>
         <ul className="space-y-2">
  <li><Link to="/aboutus" className="text-black hover:text-white no-underline">About Us</Link></li>
  <li><Link to="/contact" className="text-black hover:text-white no-underline">Contact Us</Link></li>
  <li><Link to="/faq" className="text-black hover:text-white no-underline">FAQ</Link></li>
  <li><Link to="/how-to-order" className="text-black hover:text-white no-underline">How to order wedding invitation online?</Link></li>
</ul>

        </div>

        {/* Quick Access */}
        <div>
          <h3 className="text-3xl font-bold mb-4">Quick Access</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-black hover:text-white no-underline">Home</Link></li>
            <li><Link to="/wedding-invitation" className="text-black hover:text-white no-underline">Wedding Cards</Link></li>
            <li><Link to="/hindu-cards" className="text-black hover:text-white no-underline">Hindu Wedding Cards</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <FaEnvelope />
            <span>wedtype@weddingcards.com</span>
          </div>
          <p className="mt-4">Operating hours: 10.00Am to 10.00Pm</p>
          <p className="font-semibold">Monday - Sunday</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t pt-4 text-center text-sm flex flex-col sm:flex-row justify-center items-center space-x-2 text-gray-800 font-semibold">
        <FaCopyright />
        <span>Wed knot craft India Private Limited. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
