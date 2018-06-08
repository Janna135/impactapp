import React, { Component } from 'react'

import styled from 'react-emotion'
import habits from '../data/habits'

import moment from 'moment'

import ToggleButton from './ToggleButton'
import CountButton from './CountButton'
import DateSelect from './DateSelect'

import { css } from 'react-emotion'

const List = styled('div')`
  grid-row: 2;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
`

const headerstyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  position: sticky;
`

export default class TodayPage extends Component {
  constructor(props) {
    super(props)

    this.state = { habits: habits, dayOffset: 0 }
  }

  updateHabitState(id, changeFunction) {
    const allHabits = this.state.habits
    const habitIndex = allHabits.findIndex(habit => habit.id === id)
    const oldHabit = allHabits[habitIndex]

    const newHabits = [
      ...allHabits.slice(0, habitIndex),
      { ...oldHabit, ...changeFunction(oldHabit) },
      ...allHabits.slice(habitIndex + 1)
    ]

    this.setState({ habits: newHabits })
  }

  toggleHabit(id) {
    this.updateHabitState(id, oldHabit => ({
      checked: !oldHabit.checked
    }))
  }

  increaseCount(id) {
    this.updateHabitState(id, oldHabit => ({
      count: oldHabit.count + 1
    }))
  }

  decreaseCount(id) {
    this.updateHabitState(id, oldHabit => ({
      count: oldHabit.count - 1
    }))
  }

  get currentDate() {
    return moment()
      .add(this.state.dayOffset, 'days')
      .format('DD.MM.YYYY')
  }

  moveDayLeft() {
    this.setState(state => ({
      dayOffset: this.state.dayOffset - 1
    }))
  }

  moveDayRight() {
    if (this.state.dayOffset === 0) {
      return
    } else {
      this.setState({
        dayOffset: this.state.dayOffset + 1
      })
    }
  }
  render() {
    return (
      <React.Fragment>
        <DateSelect
          className={headerstyle}
          text={this.currentDate}
          onLeft={e => this.moveDayLeft()}
          onRight={e => this.moveDayRight()}
        />

        <List>
          {this.state.habits.map(habit => {
            if (habit.checked != null) {
              return (
                <ToggleButton
                  text={habit.text}
                  checked={habit.checked}
                  key={habit.id}
                  onClick={e => this.toggleHabit(habit.id)}
                />
              )
            } else if (habit.count != null) {
              return (
                <CountButton
                  text={habit.text}
                  count={habit.count}
                  key={habit.id}
                  onIncrease={e => this.increaseCount(habit.id)}
                  onDecrease={e => this.decreaseCount(habit.id)}
                />
              )
            }
          })}
        </List>
      </React.Fragment>
    )
  }
}