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
`

export default class SavedHabits extends Component {
  render() {
    const { date, habits } = this.props
    return (
      <StyledDiv>
        <h4>{date}</h4>
        <ul>{habits}</ul>
      </StyledDiv>
    )
  }
}
