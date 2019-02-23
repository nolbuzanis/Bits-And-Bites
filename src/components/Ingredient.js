import React from 'react';
import './Ingredient.css';

const Ingredient = props => {
  return <div className='item'>{props.item}</div>;
};

export default Ingredient;
