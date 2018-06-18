import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledInput = styled('input')`
  border: 1px solid #7ae582;
`
const StyledDiv = styled('div')`
  font-size: 1.3rem;
  background-color: #7ae582;
  color: #25a18e;
  padding-bottom: 5px;

  :first-child {
    border-radius: 5px 5px 0 0;
  }
  :last-child {
    border-radius: 0 0 5px 5px;
  }
`

export default class HabitSettingsItem extends Component {
  render() {
    const { text } = this.props
    return (
      <StyledDiv>
        <StyledInput type="checkbox" />
        <label>{text}</label>
      </StyledDiv>
    )
  }
}
