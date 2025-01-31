import React from 'react';

function FilterBar({ onFilterChange }) {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter-bar-container">
      <select onChange={handleFilterChange}>
        <option value="">All Recipes</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="non-veg">Vegan</option>
        <option value="beverage">Dessert</option>
      </select>
    </div>
  );
}

export default FilterBar;
