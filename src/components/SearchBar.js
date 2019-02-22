import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='ui large icon input search-bar'>
        <input
          type='text'
          className='centerInput fluid'
          placeholder='Enter Km...'
        />
      </div>
    );
  }
}

export default SearchBar;
