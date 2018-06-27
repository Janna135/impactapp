import React, { Component } from 'react'

import List from '../styles/List'

import DateSelect from '../components/DateSelect'
import HabitList from '../components/HabitList'

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
          text={currentDate}
          onLeft={moveDayLeft}
          onRight={moveDayRight}
        />
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
      </React.Fragment>
    )
  }
}
