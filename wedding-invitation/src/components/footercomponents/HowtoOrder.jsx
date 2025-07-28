import React, { useEffect } from "react";


const HowtoOrder= () => {
  useEffect(() => {
    document.title = "How to Order | WedKnotCraft";
  }, []);

  return (
    <div className="bg-[#E6E6FA] text-black px-4 sm:px-10 md:px-20 py-10 font-sans">
      <h2 className="text-center font-bold text-3xl sm:text-2xl mb-10">
     How do I Order Wedding cards from WedKnotCraft Online?
        </h2>
      <div className="space-y-6 text-base sm:text-lg text-[#1a1a1a] leading-relaxed">
         <p className="text-2xl sm:text-xl mb-10 max-w-10xl">
         <strong>Browse the Collection:</strong> Take your time to explore our collection and discover various designs, that suit your style and preferences. you can use the search filters to narrow down your options based on theme, color, or card types.
        </p>

        <p className="text-2xl sm:text-xl mb-10 max-w-10xl">
         <strong>Select a Design:</strong> Weddings are always special but the fact about Wedknotcraft wedding Cards is that they are bespoke and exquisite in design that wins the hearts of millions across the world.
        </p>

        <p className="text-2xl sm:text-xl mb-10 max-w-10xl">
          <strong>Add to cart:</strong> The team behind us is extremely talented and has more than 50 years of experience with them to translate your dream wedding card into reality.
        </p>

        <p className="text-2xl sm:text-xl mb-10 max-w-10xl">
          <strong>Review your order :</strong>If you want your wedding card to be truly rare and exceptional then look no further. The team here is fully able to weave dreams into reality.
        </p>

      <p className="text-2xl sm:text-xl mb-10 max-w-10xl">
          <strong>Secure Payment: </strong>King of cards offers a secure online payment system. Choose Your prefered Payment method and enter the necessary details to complete your transaction.
        </p>
        <p className="text-2xl sm:text-xl mb-10 max-w-10xl">
          <strong>Place your order: </strong>After Confirming Your Payment, you will receive an order confirmation via email, along with an estimated delivery date.
        </p>
      </div>
    </div>

      
    
  );
};

export default HowtoOrder;
