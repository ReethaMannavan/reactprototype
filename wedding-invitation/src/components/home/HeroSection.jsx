import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import leaves from '../../assets/images/leavesbg.png'

const HeroSection = () => {
  return (
    <section className="bg-[#E6E6FA] w-full py-16 px-4 md:px-24 font-poppins relative overflow-hidden mb-10" style={{
     backgroundImage: `url(${leaves})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
      <div className="max-w-screen-xl mx-auto flex justify-center items-center relative mb-10">
        {/* Back Card with fade & rotation */}
        <motion.div
          initial={{ opacity: 0, rotate: -15, x: -80, y: 80 }}
          animate={{ opacity: 1, rotate: -6, x: -32, y: 32 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden md:block absolute bg-[#f0f0f0] w-[600px] h-[420px] rounded-xl shadow-2xl z-0"
        />

        {/* Main Card with scale & fade in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="bg-white w-full md:w-[600px] rounded-xl shadow-xl px-10 py-12 text-center relative z-10 border border-gray-200"
        >
          <h2 className="text-[32px] font-semibold mb-6 text-black leading-snug">
            Your Love Story Begins Here
          </h2>
          <p className="text-[20px] text-[#1a1a1a] mb-10 leading-relaxed font-semibold">
            Create stunning wedding invitations that capture the essence of your special day.
            Elegant designs, heart-felt words, and everything you need to make your first
            impression unforgettable.
          </p>
          <Link
            to="/wedding-invitation"
            className="bg-[#FFAB0D] text-black text-[20px] px-8 py-[10px] rounded-full hover:bg-orange-200 transition"
          >
            Get Your Style
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
