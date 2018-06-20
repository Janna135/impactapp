import React, { Component } from 'react'
import styled from 'react-emotion'

import Headline from '../styles/Headline'

import CountButton from './CountButton'
import ToggleButton from './ToggleButton'

const StyledDiv = styled('div')`
  width: 100%;
`

export default class HabitList extends Component {
  render() {
    const { data, habits, headline } = this.props

    return (
      <StyledDiv>
        <Headline>{headline}</Headline>
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
      </StyledDiv>
    )
  }
}
