import CardSliderSection from "../components/home/CardSliderSection";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import HeroSection from "../components/home/HeroSection";
import HomeCategoryGrid from "../components/home/HomeCategoryGrid";
import HomeHinduWeddingCardsPage from "../components/home/HomeHinduCardsPage";
import HomePromoBanner from "../components/home/HomePromoBanner";
import HomeTestimonials from "../components/home/HomeTestimonials";
import HomeWeddingCardone from "../components/home/HomeWeddingCard";
import HomeWeddingCardtwo from "../components/home/HomeWeddingCardtwo";
import HowItWorksSection from "../components/home/HowItWorksSection";
import Showcase from "../components/home/ShowCase";


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
     <Header/>
      <main className="flex-grow bg-lavender ">
      <HeroSection/>
      <br/>
      <CardSliderSection/>
      <HomeWeddingCardone/>
      <HomeWeddingCardtwo/>
     <Showcase/>
     <HomeHinduWeddingCardsPage/>
     <HomePromoBanner/>
     <HomeCategoryGrid/>
     <HomeTestimonials/>
     <HowItWorksSection/>
      </main>
     <Footer/>
    </div>
  );
};

export default HomePage;
