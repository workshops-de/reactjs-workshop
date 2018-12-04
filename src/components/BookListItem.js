import React from 'react';

const BookListItem = ({title, subtitle, author}) => {
  return (
    <div>
      <div><strong>{title}</strong></div>
      <div>{subtitle}</div>
      <div><i>{author}</i></div>
    </div>
  );
};

export default BookListItem;
