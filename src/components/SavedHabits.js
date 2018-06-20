import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledDiv = styled('div')`
  background-color: #00a5cf;
  border-radius: 5px;
  color: #9fffcb;
  height: auto;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 5px;

  :last-child {
    margin-bottom: 0;
  }
`

export default class SavedHabits extends Component {
  render() {
    const { date, goodHabits, badHabits } = this.props
    return (
      <StyledDiv>
        <h4>{date}</h4>
        <b>Gut</b>
        <ul>{goodHabits}</ul>
        <b>Schlecht</b>
        <ul>{badHabits}</ul>
      </StyledDiv>
    )
  }
}
