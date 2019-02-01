import { updateBook } from '../redux/actions'
import * as types from '../redux/constants'

describe('actions', function() {
  it('should create an action with UPDATE_BOOK type and the right payload', () => {
    const action = updateBook('someField', 'someValue');
    const expectedAction = {
      type: types.UPDATE_BOOK,
      field: 'someField',
      value: 'someValue'
    }
    expect(action).toEqual(expectedAction)
  })
})
