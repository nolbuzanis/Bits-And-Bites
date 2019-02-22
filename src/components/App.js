import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import places from '../apis/places';

class App extends React.Component {
  onTermSubmit = async term => {
    const response = await places.get('/place/nearbysearch/json', {
      params: {
        radius: term,
        location: '-33.8670522,151.1957362' //Sydney australia
      }
    });
    console.log(response);
  };

  render() {
    return (
      <div className='app ui container'>
        <h1 className='ui header centered'>
          Get Outside
          <div className='sub header'>Exercise. Explore. Get outside.</div>
        </h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
