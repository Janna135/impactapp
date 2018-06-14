import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledDiv = styled('div')`
  margin: 5px;
  background-color: #9fffcb;
  border-radius: 5px;
  color: #004e64;
  height: auto;
  padding: 5px;
  width: 100%;
`

const CountStyle = styled('span')`
  font-size: 1.3rem;
  font-weight: bold;
`

export default class OverviewHabit extends Component {
  render() {
    const { count, text, placeholder } = this.props

    return (
      <StyledDiv>
        <CountStyle>
          {count} {placeholder}
        </CountStyle>{' '}
        {text}
      </StyledDiv>
    )
  }
}
