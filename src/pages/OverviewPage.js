import React, { Component } from 'react'
import SwitchButton from '../components/SwitchButton'

import List from '../styles/List'

export default class OverviewPage extends Component {
  render() {
    return (
      <div>
        <SwitchButton />
        <List>Overview</List>
      </div>
    )
  }
}
