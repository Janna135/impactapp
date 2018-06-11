import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import globalStyles from './styles/global'
import Grid from './styles/Grid'
import styled from 'react-emotion'

import TodayPageView from './containers/TodayPageView'
import HistoryPage from './components/HistoryPage'
import Navigation from './components/Navigation'

import { createStore } from 'redux'
import reducer, { getCurrentDate } from './reducers/reducer'
import initialState from './reducers/initialState'

globalStyles()

const Main = styled('main')`
  grid-row: 2;
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
    // for every item in React state
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
