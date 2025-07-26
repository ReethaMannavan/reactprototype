
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import OrderConfirmed from "../components/order/OrderConfirmed";


const OrderConfirmedPage= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
  <Header/>
      <main className="flex-grow bg-lavender ">
<OrderConfirmed/>
      </main>
     <Footer/>
    </div>
  );
};

export default OrderConfirmedPage;
