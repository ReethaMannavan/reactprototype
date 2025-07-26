
import AboutUs from "../components/footercomponents/AboutUs";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";





const AboutUsPage= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
     <Header/>
      <main className="flex-grow bg-lavender ">
  <AboutUs/>
      </main>
     <Footer/>
    </div>
  );
};

export default AboutUsPage;
