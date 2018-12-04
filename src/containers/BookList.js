import React, { Component, Fragment } from 'react';
import BookListItem from '../components/BookListItem';

const BOOKS_URL = 'http://localhost:4730/books';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch(BOOKS_URL)
      .then(response => response.json())
      .then(books => this.setState({books}));
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
