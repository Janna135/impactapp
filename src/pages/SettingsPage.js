import React, { Component } from 'react'

import styled from 'react-emotion'
import List from '../styles/List'

import habits from '../data/habits'

import HabitSettingsItem from '../components/HabitSettingsItem'

const StyledDiv = styled('div')`
  grid-row: 2;
`
const StyledHeadline = styled('h2')`
  grid-row: 1;
  color: #7ae582;
  display: flex;
  justify-content: center;
`

const SmallHeadline = styled('h4')`
  color: #7ae582;
  display: flex;
  justify-content: center;
`

export default class SettingsPage extends Component {
  render() {
    return (
      <List>
        <StyledHeadline>Auswahl</StyledHeadline>
        <StyledDiv>
          <SmallHeadline>Gut</SmallHeadline>
          {habits.map(habit => {
            if (habit.category === 'good') {
              return <HabitSettingsItem text={habit.text} />
            }
          })}
          <SmallHeadline>Schlecht</SmallHeadline>
          {habits.map(habit => {
            if (habit.category === 'bad') {
              return <HabitSettingsItem text={habit.text} />
            }
          })}
        </StyledDiv>
      </List>
    )
  }
}
