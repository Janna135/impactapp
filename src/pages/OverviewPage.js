import React, { Component } from 'react'
import styled from 'react-emotion'

import SwitchButtonHistory from '../components/SwitchButtonHistory'
import OverviewHabit from '../components/OverviewHabit'

const Wrapper = styled('div')`
  padding: 10px 0;

  font-size: 1.2rem;
`

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

  findHabitCategory(habits, uid) {
    const foundHabit = habits.find(habit => habit.id === uid)
    return foundHabit.category
  }

  renderList(habits, statistics) {
    const goodStatistics = Object.keys(statistics).filter(
      id => this.findHabitCategory(habits, id) === 'good'
    )

    const badStatistics = Object.keys(statistics).filter(
      id => this.findHabitCategory(habits, id) === 'bad'
    )

    const renderGood = () => {
      return (
        <React.Fragment>
          <b>Gut</b>
          {goodStatistics.map(uid => {
            return (
              <OverviewHabit
                key={uid}
                count={statistics[uid]}
                placeholder={'x'}
                text={this.findHabitName(habits, uid)}
              />
            )
          })}
        </React.Fragment>
      )
    }

    const renderBad = () => {
      return (
        <React.Fragment>
          <b>Schlecht</b>
          {badStatistics.map(uid => {
            return (
              <OverviewHabit
                key={uid}
                count={statistics[uid]}
                placeholder={'x'}
                text={this.findHabitName(habits, uid)}
              />
            )
          })}
        </React.Fragment>
      )
    }

    return (
      <Wrapper>
        {!!goodStatistics.length && renderGood()}
        {!!badStatistics.length && renderBad()}
      </Wrapper>
    )
  }

  render() {
    const { data, habits } = this.props
    const statistics = this.aggregateStatistics(data)

    return (
      <React.Fragment>
        <SwitchButtonHistory />
        {this.renderList(habits, statistics)}
      </React.Fragment>
    )
  }
}
