import React from 'react';
import { Link } from 'react-router-dom';

const BookListItem = ({title, subtitle, author, isbn}) => {
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

export default BookListItem;
