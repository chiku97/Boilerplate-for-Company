import React from "react";
import "./Carousel.css"; // Import styles
import product1 from "../assets/product_1.jpg";
import product2 from "../assets/product_2.jpg";
import product3 from "../assets/product_3.jpg";

const products = [
  { id: 1, image: product1, title: "Product 1", description: "Short description of product 1" },
  { id: 2, image: product2, title: "Product 2", description: "Short description of product 2" },
  { id: 3, image: product3, title: "Product 3", description: "Short description of product 3" },
  { id: 1, image: product1, title: "Product 1", description: "Short description of product 1" },
  { id: 2, image: product2, title: "Product 2", description: "Short description of product 2" },
  { id: 3, image: product3, title: "Product 3", description: "Short description of product 3" },
]
function VerticalCarousel() {
  return (
    <div className="carousel-container">
      <h2>Featured Products/Services</h2>
      <div className="carousel">
        {products.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>View More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerticalCarousel;
