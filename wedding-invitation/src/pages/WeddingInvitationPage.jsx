
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import WeddingCardsGrid from "../components/weddinginvitation/WeddingCardsGrid";



const WeddingInvitationPage= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
     <Header/>
      <main className="flex-grow bg-lavender ">
  <WeddingCardsGrid/>
      </main>
     <Footer/>
    </div>
  );
};

export default WeddingInvitationPage;
