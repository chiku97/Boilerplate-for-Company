import React from "react";
import "./Testimonials.css"; // Import styles
import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "This service exceeded my expectations! Highly recommend to everyone.",
    image: person1,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Amazing experience! The team is super helpful and professional.",
    image: person2,
  },
  {
    id: 3,
    name: "Mike Johnson",
    text: "Affordable and reliable. I'm really happy with the results.",
    image: person3,
  },
  {
    id: 4,
    name: "Mike Johnson",
    text: "Affordable and reliable. I'm really happy with the results.",
    image: person3,
  },
  {
    id: 5,
    name: "Mike Johnson",
    text: "Affordable and reliable. I'm really happy with the results.",
    image: person3,
  },
  {
    id: 6,
    name: "Mike Johnson",
    text: "Affordable and reliable. I'm really happy with the results.",
    image: person3,
  },
];

function TestimonialsCarousel() {
  return (
    <div className="testimonials-container">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-carousel">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="customer-photo" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4 className="customer-name">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
