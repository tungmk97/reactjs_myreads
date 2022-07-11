import React, { Component } from 'react';

class BookshelfChanger extends Component {
  state = {
    value: this.props.shelf,
  };

  // change a book to a another shelf
  handleChangeShelf = (event) => {
    const { value } = event.target;
    this.setState({ value });
    console.log(value);
    this.props.onChangeShelf(this.props.book, value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChangeShelf}>
          <option value="move" disabled>
            Change Shelf
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
