import React from "react";
import "./BlogCarousel.css";

const BlogCarousel = ({ blogs }) => {
  return (
    <div className="blog-carousel-container">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <p className="blog-writer">By {blog.writer}</p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCarousel;