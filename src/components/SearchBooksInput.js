import React, { Component } from 'react';
import { Debounce } from 'react-throttle';

class SearchBooksInput extends Component {
  state = {
    value: '',
  };

  handleChangeInput = (event) => {
    console.log('=====');
    console.log(event.target.value);
    const val = event.target.value;
    this.setState({ value: val }, () => {
      this.props.onSearch(val);
    });
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        <Debounce time="400" handler="onChange">
          <input
            type="text"
            // value={this.state.value}
            onChange={this.handleChangeInput}
            placeholder="Please enter title or author..."
            autoFocus
          />
        </Debounce>
      </div>
    );
  }
}

export default SearchBooksInput;
