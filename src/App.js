import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import globalStyles from './styles/global'

import Today from './components/Daily'
import History from './components/History'
import Daily from './components/Daily'

globalStyles()

class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <Route exact path="/" component={Daily}>
            Today
          </Route>
          <Route path="/history" component={History} />

          <div>
            <Link to="/">Today</Link>
            <Link to="/history">History</Link>
          </div>
        </section>
      </Router>
    )
  }
}

export default App
