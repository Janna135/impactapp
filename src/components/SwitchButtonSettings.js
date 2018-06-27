import React, { Component } from 'react'

import styled from 'react-emotion'
import StyledSmallNavLink from '../styles/StyledSmallNavLink'

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 20px;
    display: block;
    background: linear-gradient(#004e64, transparent);
    top: calc(100% + 2.5px);
  }
`

export default class SwitchButtonSettings extends Component {
  render() {
    return (
      <Wrapper>
        <StyledSmallNavLink
          exact
          to="/settings"
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
