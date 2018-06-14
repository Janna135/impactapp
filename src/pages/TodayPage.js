import React, { Component } from 'react'
import { css } from 'react-emotion'
import styled from 'react-emotion'

import DateSelect from '../components/DateSelect'
import HabitList from '../components/HabitList'

const headerstyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  position: sticky;
`
const Main = styled('main')`
  grid-row: 2;
`

export default class TodayPage extends Component {
  render() {
    const {
      currentDate,
      moveDayLeft,
      moveDayRight,
      toggleHabit,
      increaseCount,
      decreaseCount,
      habits,
      data: history,
      dayOffset
    } = this.props

    return (
      <React.Fragment>
        <DateSelect
          className={headerstyle}
          text={currentDate}
          onLeft={moveDayLeft}
          onRight={moveDayRight}
        />
        <Main>
          <HabitList
            data={history[currentDate]}
            habits={habits}
            onToggle={toggleHabit}
            onIncrease={increaseCount}
            onDecrease={decreaseCount}
          />
        </Main>
      </React.Fragment>
    )
  }
}
