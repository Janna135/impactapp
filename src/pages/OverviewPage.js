import React, { Component } from 'react'

import SwitchButton from '../components/SwitchButton'
import OverviewHabit from '../components/OverviewHabit'

import List from '../styles/List'

export default class OverviewPage extends Component {
  aggregateStatistics(data) {
    function getNumber(num) {
      return typeof num === 'number' ? num : 1
    }

    return Object.keys(data).reduce((acc, curr) => {
      const entry = data[curr]
      Object.keys(entry).forEach(id => {
        const entryValue = entry[id]
        if (acc[id] == null) {
          acc[id] = getNumber(entryValue)
        } else {
          acc[id] = acc[id] + getNumber(entryValue)
        }
      })
      return acc
    }, {})
  }

  findHabitName(habits, uid) {
    const foundHabit = habits.find(habit => habit.id === uid)
    return foundHabit.text
  }

  render() {
    const { data, habits, uid } = this.props
    const statistics = this.aggregateStatistics(data)

    return (
      <React.Fragment>
        <SwitchButton />
        <List>
          {Object.keys(statistics).map(uid => {
            return (
              <OverviewHabit
                count={statistics[uid]}
                placeholder={'x'}
                text={this.findHabitName(habits, uid)}
              />
            )
          })}
        </List>
      </React.Fragment>
    )
  }
}
