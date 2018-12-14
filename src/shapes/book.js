import PropTypes from 'prop-types';

export default PropTypes.shape({
  isbn: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  abstract: PropTypes.string,
});
