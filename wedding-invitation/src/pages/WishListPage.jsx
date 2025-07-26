
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import Wishlist from "../components/wishlist/WishList";



const WishListPage= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
     <Header/>
      <main className="flex-grow bg-lavender ">
<Wishlist/>
      </main>
     <Footer/>
    </div>
  );
};

export default WishListPage;
