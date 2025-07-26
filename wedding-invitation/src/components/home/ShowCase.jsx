import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";

import img1 from "../../assets/images/showcase1.png";
import img2 from "../../assets/images/showcase2.png";
import img3 from "../../assets/images/showcase3.png";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Showcase() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (inView) {
      timeoutRef.current = setTimeout(() => {}, 300);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [inView]);

  return (
    <section ref={ref} className="py-16 font-poppins w-full bg-[#E6E6FA]">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 px-6 sm:px-12">
        {/* LEFT COLUMN: no gap, two images side by side with different backgrounds */}
        <div className="flex overflow-hidden shadow-xl">
          {/* Left image block with gradient background */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative w-2/3 bg-gradient-to-b from-[#7FFFD4] to-pink-200"
          >
            <img
              src={img1}
              alt="Elegant Collection"
              className="w-full h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-black text-2xl font-semibold leading-snug">
                Join our Love-Letters list and enjoy 20% off your first set of wedding invitations.
              </p>
              <p className="text-black mt-2 text-base font-semibold">
                Simple, easy and beautiful on your budget.
              </p>
            </div>
          </motion.div>

          {/* Right image block with solid peach background */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative w-1/3 bg-[#3e2723]" // Peach background
          >
            <img
              src={img2}
              alt="Floral Invitations"
              className="w-full h-[360px] object-contain"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
              <p className="text-black text-2xl font-semibold leading-snug">
                Get 20% Off Your First Order
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: same pattern, different backgrounds */}
        <div className="flex overflow-hidden shadow-xl mt-8 md:mt-0">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative w-1/3 bg-[#3e2723]" // Amber background
          >
            <img
              src={img2}
              alt="Traditional Cards"
              className="w-full h-[360px] object-contain"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
              <p className="text-black text-2xl font-semibold leading-snug">
                Early Bird Bonus
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative w-2/3 bg-gradient-to-b from-[#7FFFD4] to-pink-200 " // Peach background
          >
            <img
              src={img3}
              alt="Modern Minimal"
              className="w-full h-[380px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 text-center">
              <p className="text-black text-xl font-semibold leading-snug">
                Planning Ahead Pays Off! Book your order 60+ days in advance and get a free set of 20 extra invites for last-minute guests.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
