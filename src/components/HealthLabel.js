import React from 'react';

const HealthLabel = ({ label }) => {
  var labelArray = label.split('-');

  var newLabel = '';
  for (let i = 0; i < labelArray.length; i++) {
    newLabel = newLabel + labelArray[i];
  }

  const colors = {
    Vegan: '#3D9970',
    Vegetarian: '#2ECC40',
    PeanutFree: '#FFDC00',
    TreeNutFree: '#FF851B',
    AlcoholFree: '#B10DC9',
    SugarConscious: '#7FDBFF',
    AlcoholCocktail: '#85144b'
  };

  const background = colors[newLabel];

  return (
    <div className='ui label' style={{ backgroundColor: background }}>
      {label}
    </div>
  );
};

export default HealthLabel;
