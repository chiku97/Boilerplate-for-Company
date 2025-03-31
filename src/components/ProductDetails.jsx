import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "./ProductDetails.css";

const productData = {
  "web-development": {
    title: "Web Development",
    description:
      "We build scalable, high-performance web applications using the latest technologies.",
    image: "/assets/web-dev-detail.jpg",
    price: "$1999",
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description:
      "Crafting intuitive and beautiful user interfaces for a seamless experience.",
    image: "/assets/ui-ux-detail.jpg",
    price: "$1499",
  },
  "seo-optimization": {
    title: "SEO Optimization",
    description:
      "Boost your website’s search rankings with our expert SEO strategies.",
    image: "/assets/seo-detail.jpg",
    price: "$999",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "Increase your online presence with data-driven marketing strategies.",
    image: "/assets/digital-marketing-detail.jpg",
    price: "$1299",
  },
};

const ProductDetails = ({ darkMode }) => {
  const { productId } = useParams();
  const product = productData[productId];

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* <Navbar /> */}

      <section className="product-details">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>{product.price}</h3>
          <button className="buy-btn">Buy Now</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
