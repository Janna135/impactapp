import React, { Component } from 'react'

import SavedHabits from '../components/SavedHabits'
import SwitchButtonHistory from '../components/SwitchButtonHistory'

import List from '../styles/List'

export default class HistoryList extends Component {
  render() {
    const { data: history, habits } = this.props
    return (
      <div>
        <SwitchButtonHistory />
        <List>
          {Object.keys(history).map(date => {
            const dateHistory = history[date]
            return (
              <SavedHabits
                key={date}
                date={date}
                goodHabits={Object.keys(dateHistory).map(uid => {
                  const foundHabit = habits.find(habit => habit.id === uid)
                  const { text, type } = foundHabit
                  const value = dateHistory[uid]
                  const isToggle = type === 'toggle'
                  const textContent = isToggle ? text : `${value} ${text}`
                  if (foundHabit.category === 'good') {
                    return <li key={uid}>{textContent}</li>
                  } else {
                    return
                  }
                })}
                badHabits={Object.keys(dateHistory).map(uid => {
                  const foundHabit = habits.find(habit => habit.id === uid)
                  const { text, type } = foundHabit
                  const value = dateHistory[uid]
                  const isToggle = type === 'toggle'
                  const textContent = isToggle ? text : `${value} ${text}`
                  if (foundHabit.category === 'bad') {
                    return <li key={uid}>{textContent}</li>
                  } else {
                    return
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
