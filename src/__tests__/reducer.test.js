import { updateBook } from '../redux/actions'
import booksReducer from '../redux/reducer'

describe('booksReducer', function() {
  it('should have an initial state', () => {
    const INITIAL_STATE = {
      bookList: [],
      bookDetails: null,
      bookEdit: null,
      loading: {},
      errors: {},
    }

    const state = booksReducer()
    expect(state).toEqual(INITIAL_STATE)
  })

  it('should update book on UPDATE_BOOK', () => {
    const stateBefore = { bookEdit: { title: 'A' } }
    const stateAfter = { bookEdit: { title: 'A Book' } }
    const updateAction = updateBook('title', 'A Book')

    const state = booksReducer(stateBefore, updateAction)
    expect(state).toEqual(stateAfter)
  })
})
