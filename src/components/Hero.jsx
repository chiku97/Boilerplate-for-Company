import React from "react";
import "./Hero.css"; // Import CSS for styling

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Left Side - Tagline */}
        <div className="hero-text">
          <h1>Transforming Ideas into Reality</h1>
          <p>Your one-stop solution for all digital needs.</p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="hero-form">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
