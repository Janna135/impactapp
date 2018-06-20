import { toggleHabit } from './actions'

describe('actions', () => {
  describe('toggleHabit', () => {
    it('creates a TOGGLE_HABIT action', () => {
      expect(toggleHabit('foo')).toEqual({
        id: 'foo',
        type: 'TOGGLE_HABIT'
      })
    })
  })
})
