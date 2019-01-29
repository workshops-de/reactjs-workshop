import PropTypes from 'prop-types'

export default PropTypes.shape({
  isbn: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  abstract: PropTypes.string,
  author: PropTypes.string,
})
