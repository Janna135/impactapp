import React, { Component } from 'react'
import styled from 'react-emotion'
import StyledNavLink from '../styles/StyledNavLink'

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  position: sticky;
  margin-bottom: 10px;
  grid-row: 3;
`

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <StyledNavLink to="/" exact activeStyle={{ background: '#7AE582' }}>
          Heute
        </StyledNavLink>
        <StyledNavLink to="/history" activeStyle={{ background: '#7AE582' }}>
          Entwicklung
        </StyledNavLink>
        <StyledNavLink to="/settings" activeStyle={{ background: '#7AE582' }}>
          Einstellungen
        </StyledNavLink>
      </Wrapper>
    )
  }
}
