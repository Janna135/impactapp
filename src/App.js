import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom'
import globalStyles from './styles/global'
import { css } from 'emotion'
import Grid from './styles/Grid'

import Today from './components/Daily'
import History from './components/History'
import Daily from './components/Daily'
import Navigation from './components/Navigation'

globalStyles()

class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Route exact path="/" component={Daily}>
            Today
          </Route>
          <Route path="/history" component={History}>
            History
          </Route>
          <Navigation />
        </Grid>
      </Router>
    )
  }
}

export default App
