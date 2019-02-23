import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import axios from 'axios';
import RecipeList from './RecipeList';

class App extends React.Component {
  onTermSubmit = async term => {
    const response = await axios.get('http://www.recipepuppy.com/api/', {
      params: { i: term }
    });
    console.log(response.data.results);
  };

  render() {
    return (
      <div className='app ui container'>
        <h1 className='ui header white'>Bits and Bites</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <RecipeList />
      </div>
    );
  }
}

export default App;
