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
    console.log(response.data.hits);
    //this.setState({ recipes: response.data.results });
  };

  render() {
    return (
      <div className='app ui container'>
        <h1 className='ui header white'>Bits'N Bites</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
