import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BookShape from '../shapes/book'
import { addDummyBook, fetchBookList } from '../redux/actions'
import BookListItem from '../components/BookListItem'

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBookList()
  }

  render() {
    return (
      <Fragment>
        <h3>Book List:</h3>
        <button onClick={this.props.addDummyBook}>Add Dummy Book</button>
        <div>{this.props.loading ? 'Loading Books...' : null}</div>
        <div>{this.props.error ? 'Could not load books.' : null}</div>
        <ul>
          {this.props.bookList.map((book, index) => {
            return (
              <li key={index}>
                <BookListItem data={book} />
              </li>
            )
          })}
        </ul>
      </Fragment>
    )
  }
}

BookList.propTypes = {
  bookList: PropTypes.arrayOf(BookShape),
  loading: PropTypes.bool,
  error: PropTypes.object,
  addDummyBook: PropTypes.func.isRequired,
  fetchBookList: PropTypes.func.isRequired,
}

BookList.defaultProps = {
  bookList: [],
  loading: false,
  error: null,
}

const mapStateToProps = state => ({
  bookList: state.books.bookList,
  loading: state.books.loading.bookList,
  error: state.books.errors.bookList,
})

const mapDispatchToProps = {
  addDummyBook,
  fetchBookList,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList)
