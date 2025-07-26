import { Link } from "react-router-dom";
import cards from "../data/HinduCards";

function ProductsGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
      {cards.map((card) => (
        <Link to={`/product/${card.id}`} key={card.id}>
          <div className="cursor-pointer">
            <img src={card.image} alt={card.name} className="rounded-lg" />
            <h3 className="mt-2 font-semibold">{card.name}</h3>
            <p>₹{card.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductsGrid;
