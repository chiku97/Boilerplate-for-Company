import React from "react";
import "./CompanyHistory.css";

const milestones = [
  { year: "2010", event: "Company was founded in Silicon Valley." },
  { year: "2012", event: "Launched our first innovative product." },
  { year: "2016", event: "Expanded internationally to 10+ countries." },
  { year: "2020", event: "Reached 1 million customers worldwide." },
  { year: "2023", event: "Recognized as an industry leader in AI solutions." },
];

function CompanyHistory() {
  return (
    <section className="company-history">
      <h2>Our History</h2>
      <p>From a small startup in 2010 to an industry leader, our journey has been defined by innovation and growth.</p>
      
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{milestone.year}</div>
            <div className="timeline-content">{milestone.event}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompanyHistory;
