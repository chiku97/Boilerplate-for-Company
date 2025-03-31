import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Blog.css";
import product1 from '../assets/product_1.jpg'
import product2 from '../assets/product_2.jpg'
import product3 from '../assets/product_3.jpg'
import HeroSection from "./HeroSection";


const blogPosts = [
  {
    id: "modern-web-trends",
    title: "Modern Web Development Trends in 2025",
    excerpt:
      "Discover the latest trends in web development, including AI, serverless computing, and more...",
    image: product1,
  },
  {
    id: "ux-best-practices",
    title: "Top UX Best Practices for Better Conversions",
    excerpt:
      "Learn how great UI/UX design can enhance user experience and boost your sales...",
    image: product2,
  },
  {
    id: "seo-guide",
    title: "Complete Guide to SEO in 2025",
    excerpt:
      "A deep dive into the best SEO techniques to improve your website ranking...",
    image: product3,
  },
  {
    id: "modern-web-trends",
    title: "Modern Web Development Trends in 2025",
    excerpt:
      "Discover the latest trends in web development, including AI, serverless computing, and more...",
    image: product1,
  },
  {
    id: "ux-best-practices",
    title: "Top UX Best Practices for Better Conversions",
    excerpt:
      "Learn how great UI/UX design can enhance user experience and boost your sales...",
    image: product2,
  },
  {
    id: "seo-guide",
    title: "Complete Guide to SEO in 2025",
    excerpt:
      "A deep dive into the best SEO techniques to improve your website ranking...",
    image: product3,
  },
];

const Blog = ({ darkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* <Navbar /> */}
      <HeroSection/>
      <section className="blog-page">
        <h1>Our Latest Articles</h1>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.image} alt={post.title} />
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Blog;
