import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import edamam from '../apis/edamam';
import RecipeList from './RecipeList';

class App extends React.Component {
  state = { recipes: [] };

  onTermSubmit = async term => {
    const response = await edamam.get('/search', {
      params: { q: term }
    });
    this.setState({ recipes: response.data.hits });
    //console.log(this.state.recipes);
  };

  render() {
    return (
      <div className='app ui container'>
        <h1 className='ui header white'>Bits into Bites</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
