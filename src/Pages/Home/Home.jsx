import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";
import Reviews from "../../Components/Reviews/Reviews";
import Services from "../../Components/Services/Services";
import Works from "../../Components/Works/Works";
import './Home.css';

const Home = () => {
  return (

    <div>

     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Works/>
     <Products/>
     <Reviews/>
     <Footer/>
     
    </div>
  )
}

export default Home
