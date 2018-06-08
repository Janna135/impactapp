import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import globalStyles from './styles/global'
import Grid from './styles/Grid'

import TodayPage from './components/TodayPage'
import HistoryPage from './components/HistoryPage'
import Navigation from './components/Navigation'

globalStyles()

class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Route exact path="/" component={TodayPage}>
            Today
          </Route>
          <Route path="/history" component={HistoryPage}>
            History
          </Route>
          <Navigation />
        </Grid>
      </Router>
    )
  }
}

export default App
