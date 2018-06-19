import React, { Component } from 'react'
import { css } from 'react-emotion'
import styled from 'react-emotion'

import List from '../styles/List'

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
      data: history
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
          <List>
            <HabitList
              headline={'Gut'}
              data={history[currentDate]}
              habits={habits.filter(habit => habit.category === 'good')}
              onToggle={toggleHabit}
              onIncrease={increaseCount}
              onDecrease={decreaseCount}
            />
            <HabitList
              headline={'Schlecht'}
              data={history[currentDate]}
              habits={habits.filter(habit => habit.category === 'bad')}
              onToggle={toggleHabit}
              onIncrease={increaseCount}
              onDecrease={decreaseCount}
            />
          </List>
        </Main>
      </React.Fragment>
    )
  }
}
