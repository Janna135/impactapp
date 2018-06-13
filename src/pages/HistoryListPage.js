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
                  const foundHabit = habits.find(habit => habit.id === uid)
                  const { text, type } = foundHabit
                  const value = dateHistory[uid]
                  const isToggle = type === 'toggle'
                  const textContent = isToggle ? text : `${value} ${text}`
                  return <li key={uid}>{textContent}</li>
                })}
              />
            )
          })}
        </List>
      </div>
    )
  }
}
