import React, { Component } from 'react'
import styled from 'react-emotion'
import StyledNavLink from './StyledNavLink'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`

const StyledButton = styled('div')`
  background-color: ${props => (props.disabled ? '#004E64' : '#7AE582')};
  border: 1px solid #9fffcb;
  font-size: 1.3rem;
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  :first-child{
    border-radius 5px 0 0 5px;
  }
  :last-child{
    border-radius: 0 5px 5px 0;
  }
`

export default class SwitchButton extends Component {
  render() {
    const { onClick, selectedIndex } = this.props
    const selected = this.props.selected || 0
    return (
      <Wrapper>
        <StyledNavLink
          to="/"
          exact
          activeStyle={{
            background: '#004E64'
          }}
        >
          Today
        </StyledNavLink>
        <StyledNavLink
          to="/history"
          activeStyle={{
            background: '#004E64'
          }}
        >
          History
        </StyledNavLink>
      </Wrapper>
    )
  }
}
