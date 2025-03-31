import React from "react";
import "./TeamCarousel.css";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    bio: "Alice is a visionary leader with over 15 years of experience in the tech industry.",
    image: person1,
  },
  {
    name: "Michael Smith",
    role: "CTO",
    bio: "Michael is an expert in cloud computing and AI-driven solutions.",
    image: person2,
  },
  {
    name: "Samantha Lee",
    role: "Marketing Head",
    bio: "Samantha leads the marketing team, bringing creativity and data-driven strategies.",
    image: person3,
  },
  {
    name: "Daniel Brown",
    role: "Lead Developer",
    bio: "Daniel specializes in full-stack development and scalable applications.",
    image: person1,
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    bio: "Emily creates user-friendly designs that enhance the user experience.",
    image: person2,
  },
];

function TeamCarousel() {
  return (
    <section className="team-section">
      <h2>Meet the Team</h2>
      <div className="team-carousel">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamCarousel;
