import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import globalStyles from './styles/global'
import Grid from './styles/Grid'
import styled from 'react-emotion'

import TodayPageView from './containers/TodayPageView'
import HistoryPage from './pages/HistoryPage'
import Navigation from './components/Navigation'
import HistoryListPage from './pages/HistoryListPage'
import OverviewPage from './pages/OverviewPage'
import SettingsPage from './pages/SettingsPage'

import { createStore } from 'redux'
import reducer, { getCurrentDate } from './reducers/reducer'
import initialState from './reducers/initialState'

globalStyles()

const Main = styled('main')`
  background-color: #004e64;
`

const store = createStore(
  reducer,
  setupState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function setupState() {
  let state = localStorage.getItem('state')
  if (state) {
    return { ...JSON.parse(state), dayOffset: 0 }
  } else {
    return initialState
  }
}

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
    window.addEventListener('beforeunload', () => {
      this.saveStateToLocalStorage()
    })
  }

  componentWillUnmount() {
    this.saveStateToLocalStorage()
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    )
  }

  saveStateToLocalStorage() {
    const state = store.getState()
    localStorage.setItem('state', JSON.stringify(state))
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
              <Route exact path="/" component={TodayPageView} />
              <Route
                exact
                path="/history"
                render={() => (
                  <HistoryPage habits={state.habits} data={state.history} />
                )}
              />
              <Route
                path="/history/days"
                render={() => (
                  <HistoryListPage habits={state.habits} data={state.history} />
                )}
              />
              <Route
                path="/history/overview"
                render={() => (
                  <OverviewPage habits={state.habits} data={state.history} />
                )}
              />
              <Route
                exact
                path="/settings"
                render={() => <SettingsPage habits={state.habits} />}
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
