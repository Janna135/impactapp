import { connect } from 'react-redux'
import SettingsFormPage from '../pages/SettingsFormPage'

import { createHabit } from '../actions/actions'

const mapPropsToState = state => ({
  habits: state.habits
})

const mapPropsToDispatch = dispatch => ({
  onCreateHabit: id => dispatch(createHabit(id))
})

export default connect(
  mapPropsToState,
  mapPropsToDispatch
)(SettingsFormPage)
