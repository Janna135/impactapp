import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import globalStyles from './styles/global'
import Grid from './styles/Grid'
import styled from 'react-emotion'

import TodayPageView from './containers/TodayPageView'
import SettingsPageView from './containers/SettingsPageView'
import Navigation from './components/Navigation'
import HistoryListPage from './pages/HistoryListPage'
import OverviewPage from './pages/OverviewPage'
import SettingsFormPageView from './containers/SettingsFormPageView'

import { createStore } from 'redux'
import reducer from './reducers/reducer'
import initialState from './reducers/initialState'

globalStyles()

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

    return (
      <Provider store={store}>
        <Router>
          <Grid>
            <Route exact path="/" component={TodayPageView} />
            <Route
              path="/history/days"
              render={() => (
                <HistoryListPage habits={state.habits} data={state.history} />
              )}
            />
            <Route
              exact
              path="/history"
              render={() => (
                <OverviewPage habits={state.habits} data={state.history} />
              )}
            />
            <Route exact path="/settings" component={SettingsPageView} />
            <Route path="/settings/create" component={SettingsFormPageView} />
            <Navigation />
          </Grid>
        </Router>
      </Provider>
    )
  }
}

export default App
