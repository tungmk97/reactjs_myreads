import React from 'react';
import Book from './Book';

const BookSearchResults = (props) => {
  const { listBookSearch, listBook, onChangeShelf } = props;

  // update book shelf
  const updatedBooks = listBookSearch.map((book) => {
    listBook.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }

      return b;
    });

    return book;
  });

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onChangeShelf={onChangeShelf}
          />
        ))}
      </ol>
    </div>
  );
};

export default BookSearchResults;
