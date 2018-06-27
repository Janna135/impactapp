import React, { Component } from 'react'

import styled from 'react-emotion'

import HabitSettingsItem from '../components/HabitSettingsItem'
import SwitchButtonSettings from '../components/SwitchButtonSettings'

const SmallHeadline = styled('h3')`
  color: #7ae582;
  display: flex;
  justify-content: center;
`

const Wrapper = styled('div')`
  padding: 15px 0;
  overflow-y: scroll;
`

export default class SettingsPage extends Component {
  render() {
    const { habits } = this.props

    return (
      <React.Fragment>
        <SwitchButtonSettings />
        <Wrapper>
          <SmallHeadline>Gut</SmallHeadline>
          {habits.map(habit => {
            if (habit.category === 'good') {
              return (
                <HabitSettingsItem
                  text={habit.text}
                  onSelect={e => this.props.selectHabit(habit.id)}
                  active={habit.active || false}
                  onDelete={e => this.props.deleteHabit(habit.id)}
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
                  onDelete={e => this.props.deleteHabit(habit.id)}
                />
              )
            }
          })}
        </Wrapper>
      </React.Fragment>
    )
  }
}
