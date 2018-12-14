import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const renderInput = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
    </div>
  </div>
);

const renderTextarea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} type={type} />
      {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
    </div>
  </div>
);

const validate = values => {
  const errors = {}
  if (values.isbn === null || values.isbn === undefined || values.isbn === '') {
    errors.isbn = 'ISBN ungültig';
  }
  if (values.title === null || values.title === undefined || values.title === '') {
    errors.title = 'Title ungültig';
  }
  return errors
}


const BookFormRedux = ({ handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <Field name="isbn" label="ISBN" component={renderInput} type="text"/>
    <Field name="title" label="Title" component={renderInput} type="text"/>
    <Field name="subtitle" label="Subtitle" component={renderInput} type="text"/>
    <Field name="abstract" label="Abstract" component={renderTextarea} type="text"/>
    <button>Submit</button>
    <Link to={cancelPath}>Cancel</Link>
  </form>
);

BookFormRedux.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  cancelPath: PropTypes.string.isRequired,
};

export default reduxForm({
  form : 'book', // a unique name for this form
  enableReinitialize: true,
  validate
})(BookFormRedux);
