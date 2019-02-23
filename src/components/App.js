import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

class App extends React.Component {
  onTermSubmit = async term => {
    /*
    const response = await places.get('/place/nearbysearch/json', {
      params: {
        radius: term,
        location: '43.70011, -79.4163' //Toronto Downtown
      }
    });
    console.log(response);*/
    console.log('Clicked');
  };

  render() {
    return (
      <div className='app ui container'>
        <h1 className='ui header white'>Bits and Bites</h1>
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
