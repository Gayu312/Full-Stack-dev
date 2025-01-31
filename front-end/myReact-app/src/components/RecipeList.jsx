import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes, onFavoriteToggle }) {
  return (
    <div className="recipe-list">
      <div className="recipe-list-wrapper">
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            onFavoriteToggle={onFavoriteToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
