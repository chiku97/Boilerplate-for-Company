import React, { useState } from "react";
import "./HorizontalCarousel.css";

function HorizontalCarousel({products}) {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="horizontal-carousel-container">
      <div className="horizontal-carousel">
        {products.map((product) => (
          <div
            key={product.id}
            className={`carousel-card ${selectedProduct.id === product.id ? "active" : ""}`}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.shortDescription}</p>
          </div>
        ))}
      </div>

      <div className="product-details">
        <div className="details-text">
          <h2>{selectedProduct.title}</h2>
          <p>{selectedProduct.detailedDescription}</p>
        </div>
        <div className="details-image">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
        </div>
      </div>
    </div>
  );
}

export default HorizontalCarousel;