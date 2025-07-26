import React from "react";
import fimg1 from '../../assets/images/aboutus1.PNG'
import fimg2 from '../../assets/images/aboutus2.PNG'
import fimg3 from '../../assets/images/aboutus3.PNG'
const AboutUs = () => {
  return (
    <section className="bg-[#E6E6FA] font-poppins text-black px-6 py-12 md:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center underline mb-12">
        ABOUT US
      </h2>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-60 mb-12">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">
            Celebrating Love, One Invitation at a Time
          </h3>
          <p className="text-base md:text-lg leading-relaxed">
            At Wed Knot Craft, we believe that every love story is unique and
            deserves to be celebrated in a way that reflects its individuality.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={fimg1}
            alt="Wedding Invite"
            className="w-[350px] h-auto rounded-lg shadow"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        <div className="flex-1 order-2 md:order-1">
          <img
            src={fimg2}
            alt="Pre Wedding"
            className="w-[350px] h-auto rounded-lg shadow"
          />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <h3 className="text-xl font-semibold mb-4">OUR STORY</h3>
          <p className="text-base md:text-lg leading-relaxed">
            What started as a passion for design has blossomed into a
            full-fledged business dedicated to bringing couples' visions to
            life. Our founder, [Founder's Name], envisioned a platform where
            couples could find invitations that resonated with their personal
            style and cultural heritage.
          </p>
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-60 mb-16">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">OUR PROMISE</h3>
          <p className="mb-2 font-medium">We are committed to providing:</p>
          <ul className="list-disc list-inside text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <strong>Custom Designs:</strong> Tailored invitations that reflect
              your unique love story.
            </li>
            <li>
              <strong>Quality Craftsmanship:</strong> Invitations crafted with
              attention to detail and high-quality materials.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> A seamless experience from
              selection to delivery, ensuring your complete satisfaction.
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img
            src={fimg3}
            alt="Promise Image"
            className="w-[350px] h-auto rounded-lg shadow"
          />
        </div>
      </div>

      {/* Closing Statement */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">
          JOIN Us in Celebrating Your Special Day
        </h3>
        <p className="text-base md:text-lg leading-relaxed">
          Explore our diverse range of designs and let us help you set the tone
          for your wedding celebration. At{" "}
          <span className="font-semibold">[Your Company Name]</span>, your love
          story is our inspiration.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
