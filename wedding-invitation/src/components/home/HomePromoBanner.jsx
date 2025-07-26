import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgImage from "../../assets/images/herobannerbg.png"; 

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HomePromoBanner() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full h-[400px] md:h-[600px] bg-cover bg-center font-poppins"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full gap-4 ">
          {/* Left: Big Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-[32px] md:text-[98px] font-bold leading-tight text-yellow-400 relative"
          >
            Summer
            <p className="absolute text-black text-[22px] md:text-[30px]">Sale</p>
          </motion.h2>

          {/* Right: Supporting Text */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-[18px] md:text-[32px] font-bold"
          >
            100 Cards - 10% Off<br/>
            200 Cards - 15% Off<br/>
            300 Cards - 20% Off<br/>
            400 Cards - 25% Off<br/>
            500 Cards - 30% Off
          </motion.p>
        </div>

        {/* Bottom Center CTA */}
       
      </div>

       <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 justify-center"
        >
          <a
            href="/sale"
            className="bg-[#FFAB0D] text-white px-6 py-3 rounded-full hover:bg-amber-600 transition text-[16px] font-semibold"
          >
            Stock Clearance - 40% to 60% Off
          </a>
           <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-[18px] md:text-[18px] font-bold py-6"
          >This Offer is not applicable for customized card, E-cards and luxury boxes</motion.p>
        </motion.div>

    </section>
  );
}
