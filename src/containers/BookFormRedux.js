import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

const Input = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
    </div>
  </div>
)

const TextArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} type={type} />
      {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
    </div>
  </div>
)

const validate = values => {
  const errors = {}
  if (values.isbn === null || values.isbn === undefined || values.isbn === '') {
    errors.isbn = 'ISBN ungültig'
  }
  if (
    values.title === null ||
    values.title === undefined ||
    values.title === ''
  ) {
    errors.title = 'Title ungültig'
  }
  return errors
}

const BookFormRedux = ({ handleSubmit, onCancel }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Field name="isbn" label="ISBN" component={Input} type="text"/>
      <Field name="title" label="Title" component={Input} type="text"/>
      <Field name="subtitle" label="Subtitle" component={Input} type="text"/>
      <Field name="abstract" label="Abstract" component={TextArea} type="text"/>
      <button type="submit">Submit</button>
    </form>
    <button type="cancel" onClick={onCancel}>Cancel</button>
  </div>
);

BookFormRedux.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'book', // a unique name for this form
  enableReinitialize: true,
  validate,
})(BookFormRedux)
