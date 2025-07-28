
import AboutUs from "../components/footercomponents/AboutUs";
import HowtoOrder from "../components/footercomponents/HowtoOrder";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";





const HowtoOrderPage= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
     <Header/>
      <main className="flex-grow bg-lavender ">
 <HowtoOrder/>
      </main>
     <Footer/>
    </div>
  );
};

export default HowtoOrderPage;
