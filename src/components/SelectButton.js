import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('div')`
  background-color: ${props => (props.disabled ? '#74e582' : '#00A5CF')};
  color: #004e64;
  border: 1px solid #004e64;
  min-width: 100px;
  padding: 5px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  :first-child {
    border-radius: 5px 0 0 5px;
  }

  :last-child {
    border-radius: 0 5px 5px 0;
  }
`

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
  margin: 10px;
`

export default class SelectButton extends Component {
  render() {
    const { text1, text2, onClick } = this.props
    const selectedIndex = this.props.selectedIndex || 0

    return (
      <Wrapper>
        <StyledButton disabled={selectedIndex === 0} onClick={e => onClick(0)}>
          {text1}
        </StyledButton>
        <StyledButton disabled={selectedIndex === 1} onClick={e => onClick(1)}>
          {text2}
        </StyledButton>
      </Wrapper>
    )
  }
}
