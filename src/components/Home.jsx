import React from "react";
import "../styles/global.css"; // Import global styles
import "./Home.css"; // Import page-specific styles
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import SearchBar from "./SearchBar";
import HeroSection from "./Hero.jsx";
import VerticalCarousel from "./Carousel";
import KeySellingPoints from "./SellingPoints.jsx";
import TestimonialsCarousel from "./Testimonials.jsx";

const Home = ({ darkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* <Navbar /> */}
      <SearchBar/>
      <HeroSection/>
      <VerticalCarousel/>
      <KeySellingPoints/>
      <TestimonialsCarousel/>
      <section className="home-hero">
        <h1>Welcome to Our Website</h1>
        <p>Discover our amazing products and services.</p>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
