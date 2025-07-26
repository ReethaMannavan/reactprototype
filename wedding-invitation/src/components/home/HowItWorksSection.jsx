// src/components/sections/HowItWorksSection.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

import icon1 from "../../assets/images/ordersample.PNG";
import icon2 from "../../assets/images/sampleorder.PNG";
import icon3 from "../../assets/images/digitaldraft.PNG";
import icon4 from "../../assets/images/bulkorder.PNG";
import icon5 from "../../assets/images/delivery.PNG";

const steps = [
  { icon: icon1, title: "Order Sample" },
  { icon: icon2, title: "Get Sample Order in 5 Days" },
  { icon: icon3, title: "Approve Digital Draft" },
  { icon: icon4, title: "Place Your Bulk Order" },
  { icon: icon5, title: "Print & Delivery" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function HowItWorksSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (inView) {
      timeoutRef.current = setTimeout(() => {}, 1000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [inView]);

  return (
    <section ref={ref} className="bg-[#E6E6FA] py-12 font-poppins">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-[32px] font-bold text-black mb-10">How It Works</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="flex flex-col items-center"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-20 h-20 object-contain mb-3"
              />
              <h3 className="text-[20px] text-black font-semibold">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
