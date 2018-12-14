import types from './constants';

const INITIAL_STATE = {
  books : [],
  bookDetails: null,
  bookEdit: null,
  loading: {},
  errors: {}
};

export default function bookMonkeyApp (state = INITIAL_STATE, action) {
  switch (action.type) {

    case types.ADD_DUMMY:
      return {
        ...state,
        books: state.books.concat({title: 'DUMMY BOOK'})
      };
    case types.UPDATE_BOOK:
      return {
        ...state,
        bookEdit: action.book
      };

    // fetchBooks
    case types.FETCH_BOOKS_PENDING:
      return {
        ...state,
        loading: {
          ...state.loading,
          books: true
        }
      }
    case types.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.books,
        loading: {
          ...state.loading,
          books: false
        }
      }
    case types.FETCH_BOOKS_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          books: false
        },
        errors: {
          ...state.error,
          books: action.error
        }
      }

    // fetchBookDetails
    case types.FETCH_BOOK_DETAILS_PENDING:
      return {
        ...state,
        bookDetails: null,
        loading: {
          ...state.loading,
          bookDetails: true
        }
      }
    case types.FETCH_BOOK_DETAILS_SUCCESS:
      return {
        ...state,
        bookDetails: action.bookDetails,
        loading: {
          ...state.loading,
          bookDetails: false
        }
      }
    case types.FETCH_BOOK_DETAILS_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          bookDetails: false
        },
        errors: {
          ...state.error,
          bookDetails: action.error
        }
      }

    // fetchBookEdit
    case types.FETCH_BOOK_EDIT_PENDING:
      return {
        ...state,
        bookEdit: null,
        loading: {
          ...state.loading,
          bookEdit: true
        }
      }
    case types.FETCH_BOOK_EDIT_SUCCESS:
      return {
        ...state,
        bookEdit: action.book,
        loading: {
          ...state.loading,
          bookEdit: false
        }
      }
    case types.FETCH_BOOK_EDIT_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          bookEdit: false
        },
        errors: {
          ...state.error,
          bookEdit: action.error
        }
      }

    // persistBook
    case types.PERSIST_BOOK_PENDING:
      return {
        ...state,
        loading: {
          ...state.loading,
          persistBook: true
        }
      }
    case types.PERSIST_BOOK_SUCCESS:
      return {
        ...state,
        bookEdit: action.book,
        loading: {
          ...state.loading,
          persistBook: false
        }
      }
    case types.PERSIST_BOOK_ERROR:
      return {
        ...state,
        errors: {
          ...state.error,
          persistBook: action.error
        }
      }


    default:
      return state;
  }
}
