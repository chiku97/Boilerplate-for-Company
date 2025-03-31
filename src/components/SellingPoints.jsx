import React from "react";
import "./SellingPoints.css"; // Import styles
import product1 from '../assets/product_1.jpg'
import product2 from '../assets/product_2.jpg'

const keySellingPoints = [
  {
    id: 1,
    image: product1,
    title: "Fast & Reliable Service",
    description: "Our platform ensures quick and seamless service, providing users with an effortless experience and reliable support.",
  },
  {
    id: 2,
    image: product2,
    title: "Affordable & Transparent Pricing",
    description: "We offer cost-effective solutions with clear pricing structures, ensuring you get the best value for your investment.",
  },
];
function KeySellingPoints() {
    return (
      <div className="selling-points-container">
        {keySellingPoints.map((point, index) => (
          <div
            key={point.id}
            className={`selling-point ${index % 2 === 0 ? "reverse-layout" : ""}`}
          >
            {/* Image Section */}
            <div className="image-section">
              <img src={point.image} alt={point.title} />
            </div>
  
            {/* Text Section */}
            <div className="text-section">
              <h2>{point.title}</h2>
              <p>{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default KeySellingPoints;
