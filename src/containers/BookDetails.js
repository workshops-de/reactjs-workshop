import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BookShape from '../shapes/book'
import { fetchBookDetails } from '../redux/actions'
import Book from '../components/Book';

export class BookDetails extends Component {
  componentDidMount() {
    const { match } = this.props
    this.props.fetchBook(match.params.isbn)
  }

  render() {
    const { loading, book, match, error } = this.props
    const errorMessage = <div>Could not load book with isbn {match.params.isbn}</div>
    const loadingMessage = <div>Loading book...</div>

    return (
      <Fragment>
        <h3>Book Details:</h3>
        {loading ? loadingMessage : null}
        {error ? errorMessage : null}
        {book ? <Book {...book} /> : null}
      </Fragment>
    )
  }
}

BookDetails.propTypes = {
  loading: PropTypes.bool,
  book: BookShape,
  match: PropTypes.object.isRequired,
  error: PropTypes.object,
  fetchBook: PropTypes.func.isRequired,
}

BookDetails.defaultProps = {
  loading: false,
  book: null,
  error: null,
}

const mapStateToProps = state => ({
  book: state.books.bookDetails,
  loading: state.books.loadingDetail,
  error: state.books.errors.bookDetails,
})

const mapDispatchToProps = {
  fetchBook: fetchBookDetails,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookDetails)
