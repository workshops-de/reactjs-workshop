import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShape from '../shapes/book'
import { fetchBookEdit, updateBook, persistBook } from '../redux/actions'

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

  bookDetailPath = () => `/books/${this.props.book.isbn}`

  render() {
    const { book, loading, error } = this.props
    return (
      <Fragment>
        {loading ? <div>Loading book...</div> : null}
        {error ? <div>Could not load book.</div> : null}
        {book ? (
          <form onSubmit={this.onSubmit}>
            <label>
              Title:
              <input
                name="title"
                type="text"
                value={book.title || ''}
                onChange={this.onChangeInput}
              />
            </label>
            <br />
            <label>
              Subtitle:
              <input
                name="subtitle"
                type="text"
                value={book.subtitle || ''}
                onChange={this.onChangeInput}
              />
            </label>
            <br />
            <label>
              Abstract:
              <textarea
                name="abstract"
                type="text"
                value={book.abstract || ''}
                onChange={this.onChangeInput}
              />
            </label>
            <br />
            <button>Submit</button>
            <Link to={this.bookDetailPath()}>Cancel</Link>
          </form>
        ) : null}
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
