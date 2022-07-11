import React, { Component } from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

const ListBooks = (props) => {
  const { shelves, books, onChangeShelf } = props;
  console.log('ListBook');
  console.log(shelves);
  console.log(books);
  return (
    <div className="list-books">
      <div className="books-title">
        <h1>MyReads</h1>
      </div>
      <div className="books-content">
        <div>
          {shelves.map((shelf) =>
            shelf ? (
              <Shelf
                key={shelf.key}
                shelf={shelf}
                books={books}
                onChangeShelf={onChangeShelf}
              />
            ) : (
              'No Book'
            )
          )}
        </div>
      </div>
      <div className="open-search">
        <Link to="search">
          <button>Search</button>
        </Link>
      </div>
    </div>
  );
};

export default ListBooks;
