import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Our Blog</h1>
        <p>Inspiring ideas and industry insights for every reader.</p>
      </div>
    </section>
  );
};

export default HeroSection;