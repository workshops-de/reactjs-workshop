import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchBook } from '../redux/actions';

class BookDetail extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchBook(match.params.id);
  }

  render() {
    const { loading, book } = this.props;
    const showDetails = !loading && book;
    return (
      <Fragment>
      <h3>Book Details:</h3>
      { showDetails ?
          <Fragment>
            <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`} alt={book.title} />
            <div><strong>{book.title}</strong></div>
            <div>{book.subtitle}</div>
            <div>{book.abstract}</div>
            <div><i>{book.isbn}</i></div>
          </Fragment>
        :
          <div>Loading Book...</div>
      }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.bookDetail,
  loading: state.loadingDetail
});

const mapDispatchToProps = {
  fetchBook
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
