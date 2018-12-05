import React, { Fragment } from 'react';

const BookDetail = ({ match }) => {
  return (
    <Fragment>
      <h3>Book Details:</h3>
      <div>Book id: {match.params.id}</div>
    </Fragment>
  );
}

export default BookDetail;
