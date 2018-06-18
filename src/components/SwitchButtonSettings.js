import React, { Component } from 'react'

import styled from 'react-emotion'
import StyledSmallNavLink from '../styles/StyledSmallNavLink'

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
  grid-row: 1;
`

export default class SwitchButtonSettings extends Component {
  render() {
    return (
      <Wrapper>
        <StyledSmallNavLink
          to="/settings/select"
          activeStyle={{ background: '#7AE582' }}
        >
          Auswahl
        </StyledSmallNavLink>
        <StyledSmallNavLink
          to="/settings/create"
          activeStyle={{ background: '#7AE582' }}
        >
          Neuer Habit
        </StyledSmallNavLink>
      </Wrapper>
    )
  }
}
