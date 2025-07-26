import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import card1 from "../../assets/images/homehindu.png";
import card2 from "../../assets/images/homeluxury.png";
import card3 from "../../assets/images/homefloral.png";

const weddingCards = [
  { title: "Hindu Wedding Cards", image: card1 },
  { title: "Luxury Cards", image: card2 },
  { title: "Floral Wedding Cards", image: card3 },
];

export default function HomeWeddingCardone() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Optional: allow repeat animation
    }
  }, [inView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="bg-[#E6E6FA] py-12 font-poppins">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <h2 className="text-[32px] font-bold text-center text-black mb-6">
          Unique & Exclusive Invitation Cards
        </h2>
        <p className="text-[18px] font-bold text-center text-black mb-10">
          Because Each Wedding is Truly Unique and Memorable
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {weddingCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500"
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-72 object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="text-[20px] font-semibold text-black">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
