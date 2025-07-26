import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import weddingcard1 from '../../assets/images/hinduweddingcard.png';
import weddingcard2 from '../../assets/images/christianweddingcard.png';
import weddingcard3 from '../../assets/images/muslimweddingcard.png';
import weddingcard4 from '../../assets/images/sikhweddingcard.png';
import weddingcard5 from '../../assets/images/interfaithweddingcard.png';
import weddingcard6 from '../../assets/images/exclusiveweddingcard.png';
import weddingcard7 from '../../assets/images/traditionalweddingcard.png';
import weddingcard8 from '../../assets/images/allweddingcard.png';
import weddingcard9 from '../../assets/images/newstyle.png';
import weddingcard10 from '../../assets/images/envelope.png';
import weddingcard11 from '../../assets/images/elegantfaith.png';
import weddingcard12 from '../../assets/images/nepali.png';

const weddingCards = [
  { title: "Hindu Wedding Cards", image: weddingcard1 },
  { title: "Christian Wedding Cards", image: weddingcard2 },
  { title: "Muslim Wedding Cards", image: weddingcard3 },
  { title: "Sikh Wedding Cards", image: weddingcard4 },
  { title: "Interfaith Wedding Cards", image: weddingcard5 },
  { title: "Exclusive Wedding Cards", image: weddingcard6 },
  { title: "Traditional Wedding Cards", image: weddingcard7 },
  { title: "All Wedding Cards", image: weddingcard8 },
  { title: "New Style Wedding Cards", image: weddingcard9},
  { title: "Envelope Wedding Cards", image: weddingcard10 },
  { title: "Elegant Faith  Wedding Cards", image: weddingcard11 },
  { title: "Nepali Wedding Cards", image: weddingcard12 },
 
];

const WeddingCardsGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-lavender py-10 px-6 font-poppins min-h-screen mb-11">
        <h2 className="text-[32px] text-center mb-10 font-bold mt-6">Wedding Cards</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-10 justify-items-center ">
        
        {weddingCards.map((card, index) => (
          <motion.div
            key={index}
            onClick={() => index === 0 && navigate("/hindu-cards")}
            className={`bg-white rounded-2xl shadow-2xl p-4 flex flex-col items-center justify-center w-60 h-80 transform-style-preserve-3d  
              ${index === 0 ? "cursor-pointer hover:scale-105 hover:bg-peach" : ""}`}
            style={{
    perspective: 1000,
    boxShadow: "0px 20px 30px -5px rgba(0, 0, 0, 0.4)", 
  }}
            animate={{ rotateY: [0, 360] }}
            transition={{
              duration: 5,
              ease: "easeInOut",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-40 h-50 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{card.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCardsGrid;
