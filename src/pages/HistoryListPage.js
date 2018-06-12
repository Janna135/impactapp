import React, { Component } from 'react'

import SavedHabits from '../components/SavedHabits'
import SwitchButton from '../components/SwitchButton'

import List from '../styles/List'

export default class HistoryList extends Component {
  render() {
    const { data: history, habits } = this.props
    return (
      <div>
        <SwitchButton />
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
                    return <li key={uid}>{`${value} ${habitName}`}</li>
                  }
                })}
              />
            )
          })}
        </List>
      </div>
    )
  }
}
