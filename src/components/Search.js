import React, { useState } from "react";

function Search({ onSearch }) { // Receive the onSearch prop
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value); // Update the local state
    onSearch(event.target.value);     // Call the onSearch function passed from App
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
