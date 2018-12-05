import types from './constants';

const BOOKS_URL = 'http://localhost:4730/books';

export function addDummyBook() {
  return { type: types.ADD_DUMMY };
}

function requestBooks() {
  return { type: types.REQUEST_BOOKS };
}

function requestBook() {
  return { type: types.REQUEST_BOOK };
}

function receiveBooks(books) {
  return { type: types.RECEIVE_BOOKS, books };
}

function receiveBook(book) {
  return { type: types.RECEIVE_BOOK, book };
}

export function fetchBooks() {
  return dispatch => {

    dispatch(requestBooks());

    return fetch(BOOKS_URL)
      .then(response => response.json())
      .then(books => dispatch(receiveBooks(books)));
  }
}

export function fetchBook(id) {
  return dispatch => {

    dispatch(requestBook());

    return fetch(`${BOOKS_URL}/${id}`)
      .then(response => response.json())
      .then(book => dispatch(receiveBook(book)));
  }
}
