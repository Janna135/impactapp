import React, { Component } from 'react'

import styled from 'react-emotion'

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

export default class SettingsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledHeadline>Auswahl</StyledHeadline>
        <StyledDiv>
          {habits.map(habit => {
            return <HabitSettingsItem text={habit.text} />
          })}
        </StyledDiv>
      </React.Fragment>
    )
  }
}
