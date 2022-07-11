import React from 'react';
import Book from './Book';

const Shelf = (props) => {
  const { shelf, books, onChangeShelf } = props;
  const booksOnShelf = books.filter((book) => book.shelf === shelf.key);
  console.log(shelf);
  console.log(books);

  return (
    <div className="shelf">
      <h2 className="shelf-title">{shelf.name}</h2>
      <div className="shelf-books">
        <ol className="books-grid">
          {booksOnShelf.map((book) => (
            <Book
              key={book.id}
              book={book}
              shelf={shelf.key}
              onChangeShelf={onChangeShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
