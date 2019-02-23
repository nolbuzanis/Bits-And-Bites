import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div className='item'>
      <img className='ui image' src={recipe.thumbnail} alt={recipe.title} />
      <div className='content'>
        <a className='header' href={recipe.href}>
          {recipe.title}
        </a>
        <div className='description'>Ingredients: {recipe.ingredients}</div>
      </div>
    </div>
  );
};

export default RecipeDetail;
