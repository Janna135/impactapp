import React, { Component } from 'react'
import styled from 'react-emotion'
import StyledNavLink from './StyledNavLink'

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  position: sticky;
grid-row: 3;
  `

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <StyledNavLink to="/" exact activeStyle={{ background: '#7AE582' }}>
          Today
        </StyledNavLink>
        <StyledNavLink to="/history" activeStyle={{ background: '#7AE582' }}>
          History
        </StyledNavLink>
      </Wrapper>
    )
  }
}
