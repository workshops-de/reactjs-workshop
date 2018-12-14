import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShape from '../shapes/book';
import { fetchBookDetails } from '../redux/actions';

class BookDetails extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchBook(match.params.isbn);
  }

  render() {
    const { loading, book, match, error } = this.props;
    return (
      <Fragment>
      <h3>Book Details:</h3>
      { loading ? <div>Loading book...</div> : null }
      { error ? <div>Could not load book with isbn {match.params.isbn}</div> : null }
      { book ?
          <Fragment>
            <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} alt={book.title} />
            <div><strong>{book.title}</strong></div>
            <div>{book.subtitle}</div>
            <div>{book.abstract}</div>
            <div><i>{book.isbn}</i></div>
            <div><Link to={`/books/${book.isbn}/edit`}>Edit this Book</Link></div>
          </Fragment>
        : null
      }
      </Fragment>
    );
  }
}

BookDetails.propTypes = {
  loading: PropTypes.bool,
  book: BookShape,
  match: PropTypes.object.isRequired,
  error: PropTypes.object,
  fetchBook: PropTypes.func.isRequired,
};

BookDetails.defaultProps = {
  loading: false,
  book: null,
  error: null,
};

const mapStateToProps = (state) => ({
  book: state.bookDetails,
  loading: state.loadingDetail,
  error: state.errors.bookDetails
});

const mapDispatchToProps = {
  fetchBook: fetchBookDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
