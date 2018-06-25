import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledInput = styled('input')`
  border: 1px solid #7ae582;
`
const StyledDiv = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.3rem;
  background-color: #9fffcb;
  color: #004e64;
  padding-bottom: 5px;
`

const DeleteButton = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  background-color: #00a5cf;
  color: #9fffcb;
  width: 20px;
  height: 20px;
  font-family: sans-serif;
  margin: 5px;
  border-radius: 50%;
`

export default class HabitSettingsItem extends Component {
  render() {
    const { text, onSelect, active, onDelete } = this.props
    return (
      <StyledDiv>
        <StyledInput type="checkbox" onClick={onSelect} checked={active} />
        <label>{text}</label>
        <DeleteButton onClick={onDelete}>x</DeleteButton>
      </StyledDiv>
    )
  }
}
