import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BookShape from '../shapes/book'
import { fetchBookEdit, updateBook, persistBook } from '../redux/actions'
import BookForm from '../components/BookForm'

class BookEdit extends Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.isbn)
  }

  onChangeInput = event => {
    const newBook = {
      ...this.props.book,
      [event.target.name]: event.target.value,
    }
    this.props.updateBook(newBook)
  }

  onSubmit = event => {
    event.preventDefault()
    this.props
      .persistBook(this.props.book)
      .then(() => this.props.history.push(this.bookDetailPath()))
  }

  onCancel = () => {
    this.props.history.push(this.bookDetailPath());
  }

  bookDetailPath = () => `/books/${this.props.book.isbn}`

  render() {
    const { book, loading, error } = this.props
    const loadingMessage = <div>Loading book...</div>
    const errorMessage = <div>Could not load book.</div>
    const bookForm = (
      <BookForm
        book={book}
        onSubmit={this.onSubmit}
        onCancel={this.onCancel}
        onChangeInput={this.onChangeInput} />
    )

    return (
      <Fragment>
        {loading ? loadingMessage : null}
        {error ? errorMessage : null}
        {book ? bookForm : null}
      </Fragment>
    )
  }
}

BookEdit.propTypes = {
  book: BookShape,
  loading: PropTypes.bool,
  error: PropTypes.object,
  fetchBook: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
  persistBook: PropTypes.func.isRequired,
}

BookEdit.defaultProps = {
  book: null,
  loading: false,
  error: null,
}

const mapStateToProps = state => ({
  book: state.books.bookEdit,
  loading: state.books.loading.bookEdit,
  error: state.books.errors.bookEdit,
})

const mapDispatchToProps = {
  fetchBook: fetchBookEdit,
  updateBook,
  persistBook,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookEdit)
