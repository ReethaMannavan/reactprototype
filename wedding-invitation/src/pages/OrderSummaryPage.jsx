
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import OrderSummary from "../components/order/OrderSummary";


const OrderSummaryPage= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
  
      <main className="flex-grow bg-lavender ">
<OrderSummary/>
      </main>
     <Footer/>
    </div>
  );
};

export default OrderSummaryPage;
