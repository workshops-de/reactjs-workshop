import * as types from './constants'

const BOOKS_URL = 'http://localhost:4730/books'

export function addDummyBook() {
  return { type: types.ADD_DUMMY }
}

export function updateBook(field, value) {
  return { type: types.UPDATE_BOOK, field, value }
}

// fetchBookList
function fetchBookListPending() {
  return { type: types.FETCH_BOOK_LIST_PENDING }
}
function fetchBookListSuccess(books) {
  return { type: types.FETCH_BOOK_LIST_SUCCESS, books }
}
function fetchBookListError(error) {
  return { type: types.FETCH_BOOK_LIST_ERROR, error }
}
export function fetchBookList() {
  return dispatch => {
    dispatch(fetchBookListPending())

    return fetch(BOOKS_URL)
      .then(response => response.json())
      .then(books => dispatch(fetchBookListSuccess(books)))
      .catch(error => dispatch(fetchBookListError(error)))
  }
}

// fetchBookDetails
function fetchBookDetailsPending() {
  return { type: types.FETCH_BOOK_DETAILS_PENDING }
}
function fetchBookDetailsSuccess(book) {
  return { type: types.FETCH_BOOK_DETAILS_SUCCESS, bookDetails: book }
}
export function fetchBookDetails(isbn) {
  return dispatch => {
    dispatch(fetchBookDetailsPending())

    return fetch(`${BOOKS_URL}/${isbn}`)
      .then(response => response.json())
      .then(book => dispatch(fetchBookDetailsSuccess(book)))
  }
}

// fetchBookEdit
function fetchBookEditPending() {
  return { type: types.FETCH_BOOK_EDIT_PENDING }
}
function fetchBookEditSuccess(book) {
  return { type: types.FETCH_BOOK_EDIT_SUCCESS, book }
}
function fetchBookEditError(error) {
  return { type: types.FETCH_BOOK_EDIT_ERROR, error }
}
export function fetchBookEdit(isbn) {
  return dispatch => {
    dispatch(fetchBookEditPending())

    return fetch(`${BOOKS_URL}/${isbn}`)
      .then(response => response.json())
      .then(book => dispatch(fetchBookEditSuccess(book)))
      .catch(error => dispatch(fetchBookEditError(error)))
  }
}

// persistBook
function persistBookPending() {
  return { type: types.PERSIST_BOOK_PENDING }
}
function persistBookSuccess(book) {
  return { type: types.PERSIST_BOOK_SUCCESS, book }
}
function persistBookError(error) {
  return { type: types.PERSIST_BOOK_ERROR, error }
}
export function persistBook(book) {
  return dispatch => {
    dispatch(persistBookPending())

    const request = new Request(`${BOOKS_URL}/${book.isbn}`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(book),
    })

    return fetch(request)
      .then(response => response.json())
      .then(book => dispatch(persistBookSuccess(book)))
      .catch(error => dispatch(persistBookError(error)))
  }
}

// createBook
function createBookPending() {
  return { type: types.CREATE_BOOK_PENDING }
}
function createBookSuccess(book) {
  return { type: types.CREATE_BOOK_SUCCESS, book }
}
function createBookError(error) {
  return { type: types.CREATE_BOOK_ERROR, error }
}
export function createBook(book) {
  return dispatch => {
    dispatch(createBookPending())

    const request = new Request(BOOKS_URL, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(book),
    })

    return fetch(request)
      .then(response => response.json())
      .then(book => dispatch(createBookSuccess(book)))
      .catch(error => dispatch(createBookError(error)))
  }
}
