import React, { Component } from 'react'

import List from '../styles/List'
import SavedHabits from './SavedHabits'

export default class HistoryPage extends Component {
  render() {
    const { data: history, habits } = this.props

    return (
      <React.Fragment>
        <h3>History</h3>
        <List>
          {Object.keys(history).map(date => {
            const dateHistory = history[date]
            return (
              <SavedHabits
                date={date}
                habits={Object.keys(dateHistory).map(uid => {
                  const habitName = habits.find(habit => habit.id === uid).text
                  const habitType = habits.find(habit => habit.id === uid).type
                  const value = dateHistory[uid]
                  if (habitType === 'toggle') {
                    return <li key={uid}>{`${habitName}`}</li>
                  } else if (habitType === 'count') {
                    return <li key={uid}>{`${habitName}: ${value}`}</li>
                  }
                })}
              />
            )
          })}
        </List>
      </React.Fragment>
    )
  }
}
