import React from 'react';
import BookshelfChanger from './BookshelfChanger';

const Book = (props) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 130,
            height: 200,
            backgroundImage: `url(${props.book.imageLinks? props.book.imageLinks.thumbnail : "defaultLink"})`,
          }}
        />
        <BookshelfChanger
          book={props.book}
          shelf={props.shelf}
          onChangeShelf={props.onChangeShelf}
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">
        {props.book.authors
          ? props.book.authors.join(', ')
          : 'Anonymous Author'}
      </div>
    </div>
  </li>
);

export default React.memo(Book);
