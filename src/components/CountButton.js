import React, { Component } from 'react'
import StyledButton from './StyledButton'
import SideButton from './SideButton'

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
