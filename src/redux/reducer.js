import types from './constants';

const INITIAL_STATE = {
  books : [{title : 'A'}, {title : 'B'}, {title : 'C'}]
};

export default function bookMonkeyApp (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_DUMMY:
      return {
        books: state.books.concat({title: 'DUMMY BOOK'})
      };
    default:
      return state;
  }
}
