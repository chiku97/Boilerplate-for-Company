import React from "react";
import "./Featured.css";

const features = [
  { name: "Web Development", img: "/web-dev.jpg", desc: "Building high-quality websites." },
  { name: "Graphic Design", img: "/graphic-design.jpg", desc: "Creative and unique designs." },
  { name: "SEO Optimization", img: "/seo.jpg", desc: "Boost your website ranking." },
];

const Featured = () => {
  return (
    <div className="featured">
      <h2>Our Featured Services</h2>
      <div className="feature-list">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <img src={feature.img} alt={feature.name} />
            <h3>{feature.name}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
