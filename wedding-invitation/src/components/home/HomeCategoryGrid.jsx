import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import card1 from "../../assets/images/hindu-collection.JPG";
import card2 from "../../assets/images/christian-collection.JPG";
import card3 from "../../assets/images/muslim-collection.JPG";
import card4 from "../../assets/images/interfaith-collection.JPG";

const categories = [
  {
    title: "Hindu Invitation Collections",
    image: card1,
    link: "/hindu-cards",
  },
  {
    title: "Christian Invitation Collections",
    image: card2,
    link: "/hindu-cards",
  },
  {
    title: "Muslim Invitation Collections",
    image: card3,
    link: "/hindu-cards",
  },
  {
    title: "Interfaith Invitation Collections",
    image: card4,
    link: "/hindu-cards",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function HomeCategoryGrid() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-[#E6E6FA] py-12 font-poppins px-4 sm:px-8 mt-12"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-74 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-[20px] text-black mb-3">
                  {item.title}
                </h3>
                <Link
                  to={item.link}
                  className="inline-block bg-[#FFAB0D] hover:bg-amber-600 transition text-white px-5 py-2 rounded-full text-sm font-medium"
                >
                  Buy Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
