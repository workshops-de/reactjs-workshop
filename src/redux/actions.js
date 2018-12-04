import types from './constants';

const BOOKS_URL = 'http://localhost:4730/books';

export function addDummyBook() {
  return { type: types.ADD_DUMMY };
}

function requestBooks() {
  return { type: types.REQUEST_BOOKS };
}

function receiveBooks(books) {
  return { type: types.RECEIVE_BOOKS, books };
}

export function fetchBooks() {
  return dispatch => {

    dispatch(requestBooks());

    return fetch(BOOKS_URL)
      .then(response => response.json())
      .then(books => dispatch(receiveBooks(books)));
  }
}
