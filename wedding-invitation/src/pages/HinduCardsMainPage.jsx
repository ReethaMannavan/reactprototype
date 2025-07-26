
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import HinduCardsPage from "../components/weddingcards/HinduCardsPage";




const HinduCardsMainPage= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
     <Header/>
      <main className="flex-grow bg-lavender ">
  <HinduCardsPage/>
      </main>
     <Footer/>
    </div>
  );
};

export default HinduCardsMainPage;
