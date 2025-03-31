import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Reset after 3 sec
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* <Navbar /> */}
      <section className="contact-container">
        <h1>Contact Us</h1>
        <p>Have any questions? Feel free to reach out!</p>

        {submitted && <p className="success-msg">Message Sent Successfully!</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
