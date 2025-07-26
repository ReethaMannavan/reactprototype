import React, { useContext } from "react";
import { SearchContext } from "../search/SearchContext.jsx";
import cards from "../data/HinduCards"; // adjust path to your data file

export default function SearchResults() {
  const { searchTerm } = useContext(SearchContext);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#E6E6FA] p-6 font-poppins">
      <h2 className="text-2xl font-bold mb-6">
        Search Results for "<span className="text-amber-600">{searchTerm}</span>"
      </h2>

      {filteredCards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCards.map(card => (
            <div
              key={card.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-200"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="text-base text-gray-600">{card.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500 font-semibold">No cards found matching your search.</p>
      )}
    </div>
  );
}
