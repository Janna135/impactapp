import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import globalStyles from './styles/global'
import Grid from './styles/Grid'
import styled from 'react-emotion'

import TodayPage from './components/TodayPage'
import HistoryPage from './components/HistoryPage'
import Navigation from './components/Navigation'

import { createStore } from 'redux'
import reducer, { getCurrentDate } from './reducers/reducer'
import initialState from './reducers/initialState'

import {
  toggleHabit,
  increaseCount,
  decreaseCount,
  moveDayLeft,
  moveDayRight
} from './actions/actions'

globalStyles()

const Main = styled('main')`
  grid-row: 2;
`

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()

    const dispatch = actionCreator => payload =>
      store.dispatch(actionCreator(payload))

    return (
      <Provider store={store}>
        <Router>
          <Grid>
            <Main>
              <Route
                exact
                path="/"
                render={() => (
                  <TodayPage
                    habits={state.habits}
                    data={state.history}
                    dayOffset={state.dayOffset}
                    currentDate={getCurrentDate(state)}
                    moveDayLeft={dispatch(moveDayLeft)}
                    moveDayRight={dispatch(moveDayRight)}
                    toggleHabit={dispatch(toggleHabit)}
                    increaseCount={dispatch(increaseCount)}
                    decreaseCount={dispatch(decreaseCount)}
                  />
                )}
              />

              <Route
                path="/history"
                render={() => (
                  <HistoryPage habits={state.habits} data={state.history} />
                )}
              />
            </Main>
            <Navigation />
          </Grid>
        </Router>
      </Provider>
    )
  }
}

export default App
