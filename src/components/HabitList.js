import React, { Component } from 'react'

import CountButton from './CountButton'
import ToggleButton from './ToggleButton'
import List from '../styles/List'

export default class HabitList extends Component {
  render() {
    const { data, habits } = this.props

    return (
      <List>
        {habits.map(habit => {
          if (habit.type === 'toggle') {
            return (
              <ToggleButton
                text={habit.text}
                checked={(data && data[habit.id]) || false}
                key={habit.id}
                onClick={e => this.props.onToggle(habit.id)}
              >
                {habit.text}
              </ToggleButton>
            )
          } else if (habit.type === 'count') {
            return (
              <CountButton
                text={habit.text}
                count={(data && data[habit.id]) || 0}
                key={habit.id}
                onIncrease={e => this.props.onIncrease(habit.id)}
                onDecrease={e => this.props.onDecrease(habit.id)}
              >
                {habit.text}
              </CountButton>
            )
          }
        })}
      </List>
    )
  }
}
