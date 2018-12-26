// @TODO: PropTypes

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Book = ({ isbn, title, subtitle, abstract }) => {
	return (
		<Fragment>
			<img
				src={`http://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`}
				alt={title}
			/>
			<div>
				<strong>{title}</strong>
			</div>
			<div>{subtitle}</div>
			<div>{abstract}</div>
			<div>
				<i>{isbn}</i>
			</div>
			<div>
				<Link to={`/books/${isbn}/edit`}>Edit this Book</Link>
			</div>
		</Fragment>
	)
}

export default Book
