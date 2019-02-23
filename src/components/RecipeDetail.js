import React from 'react';
import './RecipeDetail.css';
import Ingredient from './Ingredient';

const RecipeDetail = ({ recipe }) => {
  const calories = parseInt(recipe.calories);

  const ingredients = recipe.ingredients.map(ingredient => {
    return <Ingredient item={ingredient.text} />;
  });

  return (
    <div
      className='item recipe-detail'
      onClick={() => {
        window.open(recipe.url);
      }}
    >
      <img
        className='ui image rounded small middle aligned'
        src={recipe.image}
        alt={recipe.label}
      />
      <div className='content'>
        <div className='header big ui'>{recipe.label}</div>
        <div className='meta'>{calories} Calories</div>
        <div className='description ui list'>{ingredients}</div>
      </div>
    </div>
  );
};

export default RecipeDetail;
