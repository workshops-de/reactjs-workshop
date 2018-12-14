import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class BookFormRedux extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="isbn">ISBN:</label>
          <Field name="isbn" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <Field name="title" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="subtitle">Subtitle:</label>
          <Field name="subtitle" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="abstract">Abstact:</label>
          <Field name="abstract" component="textarea" type="text"/>
        </div>
        <button>Submit</button>
        <Link to={this.props.cancelPath}>Cancel</Link>
      </form>
    );
  }
}

BookFormRedux.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  cancelPath: PropTypes.string.isRequired,
};

export default reduxForm({
  form : 'book', // a unique name for this form
  enableReinitialize: true
})(BookFormRedux);
