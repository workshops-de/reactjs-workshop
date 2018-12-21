import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../redux/actions';
import BookFormRedux from './BookFormRedux';

class BookNew extends Component {
  onSubmit = (book) => {
    this.props.createBook(book)
      .then(() => this.props.history.push(this.bookDetailPath(book.isbn)));
  }

  onCancel = (book) => {
    this.props.history.push('/');
  }

  bookDetailPath = (isbn) => {
    return `/books/${isbn}`;
  }

  render() {
    const { loading, error } = this.props;
    return (
      <Fragment>
        { loading ? <div>Creating book...</div> : null }
        { error ? <div>Could not create book.</div> : null }
        <BookFormRedux onSubmit={this.onSubmit} onCancel={this.onCancel} cancelPath='/' initialValues={{}} />
      </Fragment>
    );
  }
}

BookNew.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  createBook: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

BookNew.defaultProps = {
  loading: false,
  error: null,
};

const mapStateToProps = (state) => ({
  loading: state.books.loading.createBook,
  error: state.books.errors.createBook
});

const mapDispatchToProps = {
  createBook
};

export default connect(mapStateToProps, mapDispatchToProps)(BookNew);
