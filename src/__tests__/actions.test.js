import { updateBook } from '../redux/actions'
import types from '../redux/constants'

describe('actions', function() {
  it('should create an action with UPDATE_BOOK type and book as payload', () => {
    const action = updateBook({ title: 'A Book' })
    const expectedAction = {
      type: types.UPDATE_BOOK,
      book: {
        title: 'A Book',
      },
    }
    expect(action).toEqual(expectedAction)
  })
})
