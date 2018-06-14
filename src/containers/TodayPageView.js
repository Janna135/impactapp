import { connect } from 'react-redux'
import TodayPage from '../pages/TodayPage'
import { getCurrentDate } from '../reducers/reducer'

import {
  toggleHabit,
  increaseCount,
  decreaseCount,
  moveDayLeft,
  moveDayRight
} from '../actions/actions'

const mapPropsToState = state => ({
  currentDate: getCurrentDate(state),
  habits: state.habits,
  data: state.history,
  dayOffset: state.dayOffset
})

const mapPropsToDispatch = dispatch => ({
  moveDayLeft: () => dispatch(moveDayLeft()),
  moveDayRight: () => dispatch(moveDayRight()),
  toggleHabit: id => dispatch(toggleHabit(id)),
  increaseCount: id => dispatch(increaseCount(id)),
  decreaseCount: id => dispatch(decreaseCount(id))
})

export default connect(
  mapPropsToState,
  mapPropsToDispatch
)(TodayPage)
