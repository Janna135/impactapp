import React, { Component } from 'react'
import styled from 'react-emotion'
import { injectGlobal } from 'emotion'

injectGlobal(`
  * {
    box-sizing: border-box;
  }
`)

const StyledButton = styled('div')`
  background-color: ${props => (props.checked ? '#7AE582' : '#00A5CF')};
  border-radius: 5px;
  color: ${props => (props.checked ? '#004E64' : '#9fffcb')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  height: 50px;
  width: 300px;
`

export default class ToggleButton extends Component {
  render() {
    const { text, checked, onClick } = this.props

    return (
      <StyledButton checked={checked} onClick={onClick}>
        {text}
      </StyledButton>
    )
  }
}
