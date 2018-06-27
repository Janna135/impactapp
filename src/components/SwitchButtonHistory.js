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

export default class SwitchButtonHistory extends Component {
  render() {
    return (
      <Wrapper>
        <StyledSmallNavLink
          exact
          to="/history"
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
