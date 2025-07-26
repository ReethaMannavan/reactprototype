
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import LoginSignup from "../components/loginsignup/LoginSignup";




const LoginSignupPage= () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
     <Header/>
      <main className="flex-grow bg-lavender ">
  <LoginSignup/>
      </main>
     <Footer/>
    </div>
  );
};

export default LoginSignupPage;
