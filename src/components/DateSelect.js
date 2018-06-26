import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('div')`
  background-color: #004e64;
  border-radius: 5px;
  color: #9fffcb;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 20px;
    display: block;
    background: linear-gradient(#004e64, transparent);
    top: 100%;
  }
`

const SideButton = styled('div')`
  background-color: #9fffcb;
  border-radius: 5px;
  color: #25a18e;
  font-size: 1.5rem;
  font-weight: bold;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class DateSelect extends Component {
  render() {
    const { text, onLeft, onRight } = this.props
    return (
      <StyledButton>
        <SideButton onClick={onLeft}> ‹ </SideButton>
        {text}
        <SideButton onClick={onRight}> › </SideButton>
      </StyledButton>
    )
  }
}
