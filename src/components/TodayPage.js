import React, { Component } from 'react'
import { css } from 'react-emotion'

import DateSelect from './DateSelect'
import HabitList from './HabitList'

const headerstyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  position: sticky;
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
          onLeft={ moveDayLeft}
          onRight={ moveDayRight}
        />
        <HabitList
          data={history[currentDate]}
          habits={habits}
          onToggle={toggleHabit}
          onIncrease={ increaseCount}
          onDecrease={ decreaseCount}
        />
      </React.Fragment>
    )
  }
}
