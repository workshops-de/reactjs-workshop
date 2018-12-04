import types from './constants';

const INITIAL_STATE = {
  books : [],
  loading: false
};

export default function bookMonkeyApp (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_DUMMY:
      return {
        ...state,
        books: state.books.concat({title: 'DUMMY BOOK'})
      };
    case types.REQUEST_BOOKS:
      return {
        ...state,
        loading: true
      }
    case types.RECEIVE_BOOKS:
      return {
        ...state,
        books: action.books,
        loading: false
      }
    default:
      return state;
  }
}
