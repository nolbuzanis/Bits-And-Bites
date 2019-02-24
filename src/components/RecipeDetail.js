import React from 'react';
import './RecipeDetail.css';
import Ingredient from './Ingredient';
import HealthLabel from './HealthLabel';

const RecipeDetail = ({ recipe }) => {
  const calories = parseInt(recipe.calories);

  const ingredients = recipe.ingredients.map(ingredient => {
    return <Ingredient item={ingredient.text} />;
  });

  const labels = recipe.healthLabels.map(label => {
    return <HealthLabel label={label} />;
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
        <div className='description ui horizontal divided list'>
          {ingredients}
        </div>
      </div>
      <div className='top-right-labels'>{labels}</div>
    </div>
  );
};

export default RecipeDetail;
