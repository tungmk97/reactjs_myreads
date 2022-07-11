import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './api/BooksAPI';
import './App.css';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';


const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' },
];

class App extends Component {
  state = {
    listBook: [],
    listBookSearch: [],
  };

  componentDidMount = async () => {
    const books = await BooksAPI.getAll();
    this.setState({ listBook: books });
    console.log(this.state.listBook);
  };

  // change book  to another shelf
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((err) => {
      console.log(err);
    });
    if (shelf === 'none') {
      this.setState((oldState) => ({
        listBook: oldState.listBook.filter((b) => b.id !== book.id),
      }));
    } else {
      book.shelf = shelf;
      this.setState((oldState) => ({
        listBook: oldState.listBook
          .filter((b) => b.id !== book.id)
          .concat(book),
      }));
    }
  };

  // debounce - up performance
  searchForBooks = debounce(200, false, (searchParam) => {
    if (searchParam.length > 0) {
      BooksAPI.search(searchParam).then((books) => {
        if (books.error) {
          this.setState({ listBookSearch: [] });
        } else {
          this.setState({ listBookSearch: books });
        }
      });
    } else {
      this.setState({ listBookSearch: [] });
    }
  });

  // reset search -> set listBook to empty
  resetSearch = () => {
    this.setState({ listBookSearch: [] });
  };

  render() {
    const { listBook, listBookSearch } = this.state;
    console.log(this.state);

    if (!listBook.length > 0) {
      return <div>Cannot fetch books</div>;
    }
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              shelves={bookshelves}
              books={listBook}
              onChangeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              listBookSearch={listBookSearch}
              listBook={listBook}
              onSearch={this.searchForBooks}
              onChangeShelf={this.changeShelf}
              onResetSearch={this.resetSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
