import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className='ui large icon input search-bar'>
        <input
          onChange={this.onInputChange}
          value={this.state.term}
          type='text'
          className='centerInput fluid'
          placeholder='Enter Km...'
        />
      </div>
    );
  }
}

export default SearchBar;
