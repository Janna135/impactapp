import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledElement = styled('div')`
  display: flex;
`

const StyledButton = styled('div')`
  background-color: ${props => (props.disabled ? '#004E64' : '#7AE582')};
  border: 1px solid #9fffcb;
  color: ${props => (props.disabled ? '#7AE582' : '#004E64')};
  height: 35px;
  width: 75px;
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
    const { onClick, textLeft, textRight } = this.props
    const selected = this.props.selected || 0
    return (
      <StyledElement>
        <StyledButton disabled={selected === 0} onClick={e => onClick(0)}>
          {textLeft}
        </StyledButton>
        <StyledButton disabled={selected === 1} onClick={e => onClick(1)}>
          {textRight}
        </StyledButton>
      </StyledElement>
    )
  }
}
