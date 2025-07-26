
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import SearchResults from "../components/search/SearchResults";


const SearchResultsPage= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
     <Header/>
      <main className="flex-grow bg-lavender ">
  <SearchResults/>
      </main>
     <Footer/>
    </div>
  );
};

export default SearchResultsPage;
