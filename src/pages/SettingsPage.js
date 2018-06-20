import React, { Component } from 'react'

import styled from 'react-emotion'
import List from '../styles/List'

import HabitSettingsItem from '../components/HabitSettingsItem'
import SwitchButtonSettings from '../components/SwitchButtonSettings'

const StyledDiv = styled('div')`
  grid-row: 2;
`

const SmallHeadline = styled('h3')`
  color: #7ae582;
  display: flex;
  justify-content: center;
`

export default class SettingsPage extends Component {
  render() {
    const { habits } = this.props

    return (
      <div>
        <SwitchButtonSettings />
        <List>
          <StyledDiv>
            <SmallHeadline>Gut</SmallHeadline>
            {habits.map(habit => {
              if (habit.category === 'good') {
                return (
                  <HabitSettingsItem
                    text={habit.text}
                    onSelect={e => this.props.selectHabit(habit.id)}
                    active={habit.active || false}
                  />
                )
              }
            })}
            <SmallHeadline>Schlecht</SmallHeadline>
            {habits.map(habit => {
              if (habit.category === 'bad') {
                return (
                  <HabitSettingsItem
                    text={habit.text}
                    onSelect={e => this.props.selectHabit(habit.id)}
                    active={habit.active || false}
                  />
                )
              }
            })}
          </StyledDiv>
        </List>
      </div>
    )
  }
}
