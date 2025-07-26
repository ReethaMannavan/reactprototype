import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import client1 from "../../assets/images/james.JPG";
import client2 from "../../assets/images/harshitha.JPG";
import client3 from "../../assets/images/santhosh.JPG";

const testimonials = [
  {
    name: "James",
    subtitle: "Absolutely beautiful Invites!",
    image: client1,
    review: "We were blown away by the quality and elegance of our wedding invitations. The paper felt luxurious, and the printing was flawless. Everyone keeps asking where we got them from!",
  },
  {
    name: "Harshitha",
    subtitle: "Customized to perfection!",
    image: client2,
    review: "We want something simple but unique, and they absolutely nailed it. Colours, fonts, wording - everything was exactly how we imagined. Fast turnaround too!",
  },
  {
    name: "Santhosh",
    subtitle: "Great quality at a great price!",
    image: client3,
    review: "We were on a tight budget, but didn't want to compromise on style. These invites are not only affordable but looked premium. Arrived quickly and packages beautifully.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

export default function HomeTestimonials() {
  return (
    <section className="bg-[#E6E6FA] py-16 font-poppins">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <h2 className="text-[32px] text-center font-bold text-black mb-10">
          WHAT CLIENT SAY ABOUT US
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((client, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 shadow-xl text-center w-full h-[450px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeIn}
              custom={i}
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-[24px] font-semibold text-black mb-2">{client.name}</h3>
              <h3 className="text-[20px] font-semibold text-black mb-2">{client.subtitle}</h3>
              <p className="text-black text-[20px] mb-4 font-medium text-justify">{client.review}</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-orange-400" size={25} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
