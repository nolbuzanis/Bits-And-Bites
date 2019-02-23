import React from 'react';
import RecipeDetail from './RecipeDetail';

const RecipeList = props => {
  const recipesList = props.recipes.map(recipe => {
    return <RecipeDetail key={recipe.recipe.uri} recipe={recipe.recipe} />;
  });

  return <div className='ui list'>{recipesList}</div>;
};

export default RecipeList;
