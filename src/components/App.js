import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

class App extends React.Component {
  onTermSubmit = term => {
    console.log(term);
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
