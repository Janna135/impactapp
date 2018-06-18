import { connect } from 'react-redux'
import SettingsPage from '../pages/SettingsPage'

import { selectHabit } from '../actions/actions'

const mapPropsToState = state => ({
  habits: state.habits,
  data: state.history
})

const mapPropsToDispatch = dispatch => ({
  selectHabit: id => dispatch(selectHabit(id))
})

export default connect(
  mapPropsToState,
  mapPropsToDispatch
)(SettingsPage)
