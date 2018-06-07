import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import globalStyles from './styles/global'
import { css } from 'emotion'
import Grid from './styles/Grid'

import Today from './components/Daily'
import History from './components/History'
import Daily from './components/Daily'
import Navigation from './components/Navigation'

globalStyles()

const link = css`
  text-decoration: none;
  color: #00a5cf;
`

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
          <Navigation
            link1={
              <Link className={link} to="/">
                Today
              </Link>
            }
            link2={
              <Link className={link} to="/history">
                History
              </Link>
            }
          />
        </Grid>
      </Router>
    )
  }
}

export default App
