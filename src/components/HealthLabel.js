import React from 'react';

const HealthLabel = ({ label }) => {
  if (label) {
    var labelArray = label.split('-');

    var newLabel = '';
    for (let i = 0; i < labelArray.length; i++) {
      newLabel = newLabel + labelArray[i];
    }
  }

  const healthColors = {
    Vegan: '',
    Vegetarian: '',
    PeanutFree: '',
    TreeNutFree: '',
    AlcoholFree: ''
  };

  return <div className='ui label'>{label}</div>;
};

export default HealthLabel;
