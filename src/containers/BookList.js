import React, { Component, Fragment } from 'react';
import BookListItem from '../components/BookListItem';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { title: 'A' },
        { title: 'B' },
        { title: 'C' }
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <h3>Book List:</h3>
        <ul>
          {
            this.state.books.map((book, index) => {
              return (
                <li key={index}>
                  <BookListItem {...book}/>
                </li>
              );
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default BookList;
