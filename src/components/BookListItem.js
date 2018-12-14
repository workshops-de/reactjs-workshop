import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

BookListItem.propTypes = {
  isbn: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  author: PropTypes.string,
}

export default BookListItem;
