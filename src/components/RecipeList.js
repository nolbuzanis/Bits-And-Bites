import React from 'react';
import RecipeDetail from './RecipeDetail';

const RecipeList = props => {
  const recipesList = props.recipes.map(recipe => {
    return <RecipeDetail recipe={recipe} />;
  });

  return <div className='ui list'>{recipesList}</div>;
};

export default RecipeList;
