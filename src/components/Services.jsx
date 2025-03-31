import React from "react";
import "./Services.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "./ServicesHero";
import VerticalCarousel from "./HorizontalCarousel";
import FAQSection from "./FAQSection";
import HorizontalCarousel from "./HorizontalCarousel";

import product1 from "../assets/product_1.jpg";
import product2 from "../assets/product_2.jpg";
import product3 from "../assets/product_3.jpg";

const servicesData = [
  {
    title: "Web Development",
    description: "Building modern and scalable web applications.",
    image: product1,
  },
  {
    title: "UI/UX Design",
    description: "Creating visually stunning and user-friendly interfaces.",
    image: product2,
  },
  {
    title: "SEO Optimization",
    description: "Improving website visibility and search rankings.",
    image: product3,
  },
  {
    title: "Digital Marketing",
    description: "Boosting online presence with targeted marketing strategies.",
    image: product1,
  },
];

const Services = ({ darkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* <Navbar /> */}
        <HeroSection/>
        <HorizontalCarousel products={servicesData}/>
        <FAQSection/>

      {/* <Footer /> */}
    </div>
  );
};

export default Services;
