import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';

// Import images
import BriyaniImg from './assets/images/Briyani.jpeg';
import ChacoMilkShakeImg from './assets/images/ChacoMilkShake.jpeg';
import ChickenFryImg from './assets/images/ChickenFry.jpeg';
import ChickenWingsImg from './assets/images/ChickenWings.jpeg';
import IdlyImg from './assets/images/Idly.jpeg';
import MealsImg from './assets/images/meals.jpeg';
import NoodlesImg from './assets/images/noodles.jpeg';
import PastaImg from './assets/images/Pasta.jpeg';
import PizzaImg from './assets/images/pizza.png';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const initialRecipes = [
      { id: 1, name: 'Briyani', image: BriyaniImg, description: 'Delicious spicy rice with chicken or mutton.', price: 250, category: 'non-veg', isFavorite: false },
      { id: 2, name: 'Chaco Milk Shake', image: ChacoMilkShakeImg, description: 'Chocolate milkshake with a creamy texture.', price: 150, category: 'beverage', isFavorite: false },
      { id: 3, name: 'Chicken Fry', image: ChickenFryImg, description: 'Crispy fried chicken with a spicy coating.', price: 180, category: 'non-veg', isFavorite: false },
      { id: 4, name: 'Chicken Wings', image: ChickenWingsImg, description: 'Succulent chicken wings with a tangy glaze.', price: 170, category: 'non-veg', isFavorite: false },
      { id: 5, name: 'Idly', image: IdlyImg, description: 'Steamed rice cakes served with chutney.', price: 60, category: 'vegetarian', isFavorite: false },
      { id: 6, name: 'Meals', image: MealsImg, description: 'A complete South Indian meal with rice and curry.', price: 120, category: 'non-veg', isFavorite: false },
      { id: 7, name: 'Noodles', image: NoodlesImg, description: 'Stir-fried noodles with vegetables and sauce.', price: 160, category: 'vegetarian', isFavorite: false },
      { id: 8, name: 'Pasta', image: PastaImg, description: 'Pasta with a rich tomato sauce and cheese.', price: 220, category: 'vegetarian', isFavorite: false },
      { id: 9, name: 'Pizza', image: PizzaImg, description: 'Cheesy pizza with a variety of toppings.', price: 350, category: 'vegetarian', isFavorite: false },
    ];

    setRecipes(initialRecipes);
    setFilteredRecipes(initialRecipes);
  }, []);

  useEffect(() => {
    handleFilterRecipes(searchQuery, filter);
  }, [searchQuery, filter, recipes]);

  const handleFilterRecipes = (searchQuery, filter) => {
    let filtered = recipes;

    if (searchQuery) {
      filtered = filtered.filter((recipe) => 
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filter) {
      filtered = filtered.filter((recipe) => recipe.category === filter);
    }

    setFilteredRecipes(filtered);
  };

  const handleFavoriteToggle = (id) => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === id) {
        recipe.isFavorite = !recipe.isFavorite;
      }
      return recipe;
    });

    setRecipes(updatedRecipes);

    const updatedFavorites = recipes.find((recipe) => recipe.id === id);
    if (updatedFavorites.isFavorite) {
      setFavorites([...favorites, updatedFavorites]);
    } else {
      setFavorites(favorites.filter((fav) => fav.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="search-filter-container">
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
        <FilterBar onFilterChange={(category) => setFilter(category)} />
      </div>
      <RecipeList recipes={filteredRecipes} onFavoriteToggle={handleFavoriteToggle} />
      <h2>Favorites</h2>
      <RecipeList recipes={favorites} onFavoriteToggle={handleFavoriteToggle} />
      <Footer/>
    </>
  );
}

export default App;
