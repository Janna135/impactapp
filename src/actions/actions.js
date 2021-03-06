export function toggleHabit(id) {
  return {
    type: 'TOGGLE_HABIT',
    id
  }
}

export function increaseCount(id) {
  return {
    type: 'INCREASE_COUNT',
    id
  }
}

export function decreaseCount(id) {
  return {
    type: 'DECREASE_COUNT',
    id
  }
}

export function moveDayLeft() {
  return {
    type: 'MOVE_DAY_LEFT'
  }
}

export function moveDayRight() {
  return {
    type: 'MOVE_DAY_RIGHT'
  }
}
export function selectHabit(id) {
  return {
    type: 'SELECT_HABIT',
    id
  }
}
export function createHabit(habit) {
  return {
    type: 'CREATE_HABIT',
    habit
  }
}
export function deleteHabit(id) {
  return {
    type: 'DELETE_HABIT',
    id
  }
}
