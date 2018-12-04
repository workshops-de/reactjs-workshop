import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addDummyBook } from '../redux/actions';
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
        <button onClick={this.props.addDummyBook}>Add Dummy Book</button>
        <ul>
          {
            this.props.books.map((book, index) => {
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

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDummyBook: () => {
      return dispatch(addDummyBook());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
