import React, { Component } from 'react'
import styled from 'react-emotion'

import CountButton from './CountButton'
import ToggleButton from './ToggleButton'

const List = styled('div')`
  grid-row: 2;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
`

export default class HabitList extends Component {
  render() {
    const data = this.props.data

    return (
      <List>
        {this.props.habits.map(habit => {
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
