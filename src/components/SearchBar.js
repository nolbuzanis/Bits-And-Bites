import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui search-bar'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onInputChange}
            value={this.state.term}
            type='text'
            className='centerInput fluid'
            placeholder='banana, yogurt, etc'
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
