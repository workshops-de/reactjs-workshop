import React from 'react'
import PropTypes from 'prop-types'
import BookShape from '../shapes/book'
import { Link } from 'react-router-dom'

const BookForm = ({ onSubmit, onChangeInput, book, bookDetailPath }) => {
	return (
		<form onSubmit={onSubmit}>
			<label>
				Title:
				<input
					name="title"
					type="text"
					value={book.title || ''}
					onChange={onChangeInput}
				/>
			</label>
			<br />
			<label>
				Subtitle:
				<input
					name="subtitle"
					type="text"
					value={book.subtitle || ''}
					onChange={onChangeInput}
				/>
			</label>
			<br />
			<label>
				Abstract:
				<textarea
					name="abstract"
					type="text"
					value={book.abstract || ''}
					onChange={onChangeInput}
				/>
			</label>
			<br />
			<button>Submit</button>
			<Link to={bookDetailPath}>Cancel</Link>
		</form>
	)
}

BookForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChangeInput: PropTypes.func,
	book: BookShape,
	bookDetailPath: PropTypes.string
}

export default BookForm
