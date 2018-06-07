import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('div')`
  background-color: #004e64;
  border-radius: 5px;
  color: #9fffcb;
  font-family: sans-serif;
  font-weight: bold;
  height: 50px;
  width: 300px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
