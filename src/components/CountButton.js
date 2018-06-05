import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('div')`
  background-color: #74e582;
  border-radius: 5px;
  color: #004e64;
  width: 300px;
  height: 50px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SideButton = styled('div')`
  background-color: #00a5cf;
  border-radius: 5px;
  color: #9fffcb;
  font-size: 1.5rem;
  font-weight: bold;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class CountButton extends Component {
  render() {
    const { text, count, onIncrease, onDecrease } = this.props

    return (
      <StyledButton active={count > 0}>
        <SideButton onClick={onDecrease}>-</SideButton>
        <span>
          {count > 0 && `${count}`} {text}
        </span>
        <SideButton onClick={onIncrease}>+</SideButton>
      </StyledButton>
    )
  }
}
