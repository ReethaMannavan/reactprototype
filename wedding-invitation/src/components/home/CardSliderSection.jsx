

import sliderimage1 from '../../assets/images/lasercut.jpg'
import sliderimage2 from '../../assets/images/traditional.jpg'

import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const slides = [
  {
    title: "Royal Wedding Cards",
    subtitle: "Make your day feel like royalty",
    image: sliderimage1,
    buttonText: "Explore Now",
    link: "/wedding-invitation",
  },
  {
    title: "Minimal Invitations",
    subtitle: "Elegant and simple designs",
    image: sliderimage2,
    buttonText: "View Styles",
    link: "/themes/modern",
  },
  {
    title: "Digital Video Invites",
    subtitle: "Share your joy in motion",
    image: sliderimage1,
    buttonText: "Create Now",
    link: "/digital/video",
  },
];

export default function CardSliderSection() {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide when in view
  useEffect(() => {
    if (inView) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 1500);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [index, inView]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#E6E6FA] py-12 overflow-hidden font-poppins"
    >
      <div className="max-w-screen-xl mx-auto relative px-4 sm:px-8">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#FFAB0D] p-3 rounded-full text-white hover:bg-amber-600"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Slides */}
        <div className="relative h-[400px] md:h-[480px] rounded-2xl shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slides[index].image}
                alt={slides[index].title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6">
                <div className="text-white max-w-xl">
                  <h2 className="text-[32px] md:text-[36px] font-bold mb-3">
                    {slides[index].title}
                  </h2>
                  <p className="text-[20px] md:text-[24px] mb-6">{slides[index].subtitle}</p>
                  <a
                    href={slides[index].link}
                    className="inline-block bg-[#FFAB0D] hover:bg-amber-600 transition text-white px-6 py-3 rounded-full text-[16px] font-medium"
                  >
                    {slides[index].buttonText}
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#FFAB0D] p-3 rounded-full text-white hover:bg-amber-600"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
