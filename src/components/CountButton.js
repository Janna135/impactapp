import React, { Component } from 'react'
import StyledButton from '../styles/StyledButton'
import SideButton from '../styles/SideButton'

export default class CountButton extends Component {
  render() {
    const { text, count, onIncrease, onDecrease } = this.props

    return (
      <StyledButton active={count > 0}>
        <SideButton onClick={onDecrease}>-</SideButton>
        {count > 0 && `${count}`} {text}
        <SideButton onClick={onIncrease}>+</SideButton>
      </StyledButton>
    )
  }
}
