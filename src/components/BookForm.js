import React from 'react'
import PropTypes from 'prop-types'
import BookShape from '../shapes/book'

const BookForm = ({ onSubmit, onChangeInput, onCancel, book }) => {
	return (
		<div>
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
			</form>
			<button onClick={onCancel}>Cancel</button>
		</div>
	)
}

BookForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	onChangeInput: PropTypes.func,
	book: BookShape,
}

export default BookForm
