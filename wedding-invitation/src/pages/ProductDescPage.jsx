
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import HinduWeddingCardsPage from "../components/weddingcards/HinduCardsPage";
import HinduWeddingCardsPageDesc from "../components/weddingcards/HinduCardsPageDesc";
import ProductDescription from "../components/weddingcards/ProductDescription";


const ProductsDescPage= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
     <Header/>
      <main className="flex-grow bg-lavender ">
 <ProductDescription/>
 <HinduWeddingCardsPageDesc/>
      </main>
     <Footer/>
    </div>
  );
};

export default ProductsDescPage;
