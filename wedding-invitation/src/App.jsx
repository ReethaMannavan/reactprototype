import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css';
import { Toaster } from "react-hot-toast";
import HomePage from './pages/HomePage';
import WeddingInvitationPage from './pages/WeddingInvitationPage';
import LoginSignupPage from './pages/LoginSignupPage';
import HinduCardsMainPage from './pages/HinduCardsMainPage';
import { WishlistCartProvider } from './components/wishlist/WishlistCartContext'
import ProductsDescPage from './pages/ProductDescPage';
import WishListPage from './pages/WishListPage';
import SearchResultsPage from './pages/SearchResultsPage';
import OrderSummaryPage from './pages/OrderSummaryPage';
import OrderConfirmedPage from './pages/OrderConfirmedPage';
import AboutUsPage from './pages/AboutUsPage';
import FAQPage from './pages/FAQPage';
function App() {


  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
     <WishlistCartProvider>
     <Router>
      <div className="min-h-screen bg-[#E6E6FA] font-poppins text-black">
      
        <main>
         
          <Routes>
            <Route path="/" element={<HomePage/>} />
         
            <Route path="/wedding-invitation" element={<WeddingInvitationPage />} />
            <Route path="/loginsignup" element={<LoginSignupPage/>} />
            <Route path="/hindu-cards" element={<HinduCardsMainPage />} />
            {/* <Route path="/product-description" element={<ProductsDescPage/>} /> */}
            <Route path="/product/:id" element={<ProductsDescPage />} />

            <Route path="/wishlist" element={<WishListPage/>} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/ordersummary" element={<OrderSummaryPage/>} />
            <Route path="/orderconfirmed" element={<OrderConfirmedPage/>} />
            <Route path="/aboutus" element={<AboutUsPage/>} />
            <Route path="/faq" element={<FAQPage/>} />
          </Routes>
         
        </main>
      </div>
    </Router>
       </WishlistCartProvider>
    </>
  )
}

export default App
