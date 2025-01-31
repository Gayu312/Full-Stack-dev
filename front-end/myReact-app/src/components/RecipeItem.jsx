import React from 'react';

function RecipeItem({ recipe, onFavoriteToggle }) {
  return (
    <div className="recipe-item">
      <img className="recipe-image" src={recipe.image} alt={recipe.name} />
      <h3 className="recipe-title">{recipe.name}</h3>
      <p className="recipe-description">{recipe.description}</p>
      <p className="recipe-price">₹{recipe.price}</p>
      <button onClick={() => onFavoriteToggle(recipe.id)}>
        {recipe.isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
}

export default RecipeItem;
