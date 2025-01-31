import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // Pass the query to the parent
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search-bar-form">
      <input 
        type="text" 
        placeholder="Search for recipes..." 
        value={query} 
        onChange={handleSearchChange} 
        className="search-bar-input"
      />
      <button type="submit" className="search-bar-button">Search</button>
    </form>
  );
}

export default SearchBar;