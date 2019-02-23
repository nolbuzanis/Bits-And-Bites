import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div className='item'>
      <img className='ui image' src={recipe.image} alt={recipe.label} />
      <div className='content'>
        <a className='header' href={recipe.url}>
          {recipe.label}
        </a>
        <div className='description'>Ingredients: </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
