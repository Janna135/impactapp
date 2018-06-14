import React, { Component } from 'react'

import Grid from '../styles/Grid'
import List from '../styles/List'

import SwitchButton from '../components/SwitchButton'

import Navigation from '../components/Navigation'

export default class HistoryPage extends Component {
  render() {
    const { data: history, habits } = this.props
    return (
      <React.Fragment>
        <Grid>
          <SwitchButton />
          <List>What do you want to see?</List>
          <Navigation />
        </Grid>
      </React.Fragment>
    )
  }
}
