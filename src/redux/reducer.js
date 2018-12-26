import * as types from './constants'

const INITIAL_STATE = {
  bookList: [],
  bookDetails: null,
  bookEdit: null,
  loading: {},
  errors: {},
}

export default function booksReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case types.ADD_DUMMY:
      return {
        ...state,
        bookList: [...state.bookList, { title: 'DUMMY BOOK' }],
      }
    case types.UPDATE_BOOK:
      return { ...state, bookEdit: action.book }

    // fetchBooks
    case types.FETCH_BOOK_LIST_PENDING:
      return {
        ...state,
        loading: { ...state.loading, bookList: true },
      }
    case types.FETCH_BOOK_LIST_SUCCESS:
      return {
        ...state,
        bookList: action.books,
        loading: { ...state.loading, bookList: false },
      }
    case types.FETCH_BOOK_LIST_ERROR:
      return {
        ...state,
        loading: { ...state.loading, bookList: false },
        errors: { ...state.errors, bookList: action.error },
      }

    // fetchBookDetails
    case types.FETCH_BOOK_DETAILS_PENDING:
      return {
        ...state,
        bookDetails: null,
        loading: { ...state.loading, bookDetails: true },
      }
    case types.FETCH_BOOK_DETAILS_SUCCESS:
      return {
        ...state,
        bookDetails: action.bookDetails,
        loading: { ...state.loading, bookDetails: false },
      }
    case types.FETCH_BOOK_DETAILS_ERROR:
      return {
        ...state,
        loading: { ...state.loading, bookDetails: false },
        errors: { ...state.errors, bookDetails: action.error },
      }

    // fetchBookEdit
    case types.FETCH_BOOK_EDIT_PENDING:
      return {
        ...state,
        bookEdit: null,
        loading: { ...state.loading, bookEdit: true },
      }
    case types.FETCH_BOOK_EDIT_SUCCESS:
      return {
        ...state,
        bookEdit: action.book,
        loading: { ...state.loading, bookEdit: false },
      }
    case types.FETCH_BOOK_EDIT_ERROR:
      return {
        ...state,
        loading: { ...state.loading, bookEdit: false },
        errors: { ...state.errors, bookEdit: action.error },
      }

    // persistBook
    case types.PERSIST_BOOK_PENDING:
      return {
        ...state,
        loading: { ...state.loading, persistBook: true },
      }
    case types.PERSIST_BOOK_SUCCESS:
      return {
        ...state,
        bookEdit: action.book,
        loading: { ...state.loading, persistBook: false },
      }
    case types.PERSIST_BOOK_ERROR:
      return {
        ...state,
        errors: { ...state.errors, persistBook: action.error },
      }

    // createBook
    case types.CREATE_BOOK_PENDING:
      return {
        ...state,
        loading: { ...state.loading, createBook: true },
      }
    case types.CREATE_BOOK_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, createBook: false },
      }
    case types.CREATE_BOOK_ERROR:
      return {
        ...state,
        errors: { ...state.errors, createBook: action.error },
      }

    default:
      return state
  }
}
