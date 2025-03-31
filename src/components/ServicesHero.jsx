import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Explore Our Premium Products</h1>
        <p>Services designed for your success.</p>
      </div>
    </section>
  );
};

export default HeroSection;