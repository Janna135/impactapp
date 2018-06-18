import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledInput = styled('input')`
  border: 1px solid #7ae582;
`
const StyledDiv = styled('div')`
  font-size: 1.3rem;
  background-color: #9fffcb;
  color: #004e64;
  padding-bottom: 5px;
`

export default class HabitSettingsItem extends Component {
  render() {
    const { text, onSelect, active } = this.props
    return (
      <StyledDiv>
        <StyledInput type="checkbox" onClick={onSelect} checked={active} />
        <label>{text}</label>
      </StyledDiv>
    )
  }
}
