import React, { Component } from 'react'
import styled from 'react-emotion'

import Headline from '../styles/Headline'

import CountButton from './CountButton'
import ToggleButton from './ToggleButton'

const Div = styled('div')`
  width: 95%;
`

export default class HabitList extends Component {
  render() {
    const { data, habits, headline } = this.props
    const activeHabits = habits.filter(habit => habit.active === true)

    return (
      <Div>
        <Headline>{headline}</Headline>
        {activeHabits.map(habit => {
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
      </Div>
    )
  }
}
