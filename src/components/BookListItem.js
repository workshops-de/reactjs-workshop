import React from 'react';
import { Link } from 'react-router-dom';
import BookShape from '../shapes/book';

const BookListItem = ({data}) => {
  const {title, subtitle, author, isbn} = data;
  return (
    <div>
      <div>
        <strong>
          <Link to={`/books/${isbn}`}>{title}</Link>
        </strong>
      </div>
      <div>{subtitle}</div>
      <div><i>{author}</i></div>
      <div>ISBN: {isbn}</div>
    </div>
  );
};

BookListItem.propTypes = {
  data: BookShape
}

export default BookListItem;
