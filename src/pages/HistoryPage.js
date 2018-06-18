import React, { Component } from 'react'

import Grid from '../styles/Grid'
import List from '../styles/List'

import SwitchButtonHistory from '../components/SwitchButtonHistory'

import Navigation from '../components/Navigation'

export default class HistoryPage extends Component {
  render() {
    const { data: history, habits } = this.props
    return (
      <React.Fragment>
        <Grid>
          <SwitchButtonHistory />
          <List>What do you want to see?</List>
          <Navigation />
        </Grid>
      </React.Fragment>
    )
  }
}
