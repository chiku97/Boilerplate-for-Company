import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "./BlogPost.css";

const blogPosts = {
  "modern-web-trends": {
    title: "Modern Web Development Trends in 2025",
    content: `
      Web development is evolving rapidly. In 2025, trends like AI-powered design,
      serverless architectures, and WebAssembly are shaping the future of web apps.
      Developers are focusing on performance, accessibility, and enhanced user experience.
    `,
    image: "/assets/blog-web-trends.jpg",
  },
  "ux-best-practices": {
    title: "Top UX Best Practices for Better Conversions",
    content: `
      UX design is crucial for user engagement. Following best practices such as clear 
      navigation, fast load times, and mobile-friendly interfaces can significantly improve 
      conversion rates.
    `,
    image: "/assets/blog-ux.jpg",
  },
  "seo-guide": {
    title: "Complete Guide to SEO in 2025",
    content: `
      SEO strategies are constantly evolving. In 2025, AI-driven search algorithms 
      emphasize quality content, mobile-first indexing, and Core Web Vitals. 
      Staying updated with these trends is key to ranking higher.
    `,
    image: "/assets/blog-seo.jpg",
  },
};

const BlogPost = ({ darkMode }) => {
  const { postId } = useParams();
  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className={darkMode ? "dark-mode" : ""}>
        {/* <Navbar /> */}
        <div className="blog-post">
          <h1>Post Not Found</h1>
          <p>The blog post you are looking for does not exist.</p>
          <Link to="/blog" className="back-btn">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Navbar />
      <section className="blog-post">
        <img src={post.image} alt={post.title} />
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link to="/blog" className="back-btn">← Back to Blog</Link>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost;
