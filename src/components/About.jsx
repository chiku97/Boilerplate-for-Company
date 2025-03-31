import React from "react";
import "../styles/global.css"; // Import global styles
import "./About.css"; // Import page-specific styles
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "./AboutHero";
import CompanyHistory from "./CompanyHistory";
import MissionVision from "./MissionVision";
import TeamCarousel from "./TeamCarousel";

const About = ({ darkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* <Navbar /> */}
        <HeroSection/>
        <CompanyHistory/>
        <MissionVision/>
        <TeamCarousel/>
      

      {/* <Footer /> */}
    </div>
  );
};

export default About;
