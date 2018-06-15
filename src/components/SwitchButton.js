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

export default class SwitchButton extends Component {
  render() {
    return (
      <Wrapper>
        <StyledSmallNavLink
          to="/history/overview"
          activeStyle={{ background: '#7AE582' }}
        >
          Übersicht
        </StyledSmallNavLink>
        <StyledSmallNavLink
          to="/history/days"
          activeStyle={{ background: '#7AE582' }}
        >
          Tage
        </StyledSmallNavLink>
      </Wrapper>
    )
  }
}
