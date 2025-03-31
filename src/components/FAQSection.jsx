import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    question: "How do I purchase a product?",
    answer: "You can purchase a product by visiting our online store, selecting the desired item, and completing the checkout process.",
  },
  {
    question: "What is the duration of the service?",
    answer: "The duration of the service depends on the specific package you choose. Please refer to the service details for more information.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee for all our products and services. Terms and conditions apply.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can contact our customer support team via email at support@example.com or call us at 123-456-7890.",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;