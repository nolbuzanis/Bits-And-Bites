import React from 'react';
import './RecipeDetail.css';

const RecipeDetail = ({ recipe }) => {
  const calories = parseInt(recipe.calories);

  return (
    <div className='item recipe-detail'>
      <img
        className='ui image rounded small middle aligned'
        src={recipe.image}
        alt={recipe.label}
      />
      <div className='content'>
        <div className='header big ui'>{recipe.label}</div>
        <div className='meta'>{calories} Calories</div>
      </div>
    </div>
  );
};

export default RecipeDetail;
