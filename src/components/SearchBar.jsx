import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
    // TODO: Implement actual search functionality
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products, services, or blog posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="search-btn">
        🔍
      </button>
    </div>
  );
}

export default SearchBar;
