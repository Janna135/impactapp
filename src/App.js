import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import habits from './data/habits'
import globalStyles from './styles/global'

import ToggleButton from './components/ToggleButton'
import CountButton from './components/CountButton'

globalStyles()

const Grid = styled('div')`
  display: grid;
  grid-template-rows: auto;
  height: 100vh;
`
const List = styled('div')`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

class App extends Component {
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
    this.updateHabitState(id, oldHabit => ({ checked: !oldHabit.checked }))
  }

  increaseCount(id) {
    this.updateHabitState(id, oldHabit => ({ count: oldHabit.count + 1 }))
  }

  decreaseCount(id) {
    this.updateHabitState(id, oldHabit => ({ count: oldHabit.count - 1 }))
  }

  constructor(props) {
    super(props)

    this.state = {
      habits: habits
    }
  }

  render() {
    return (
      <Grid>
        <List>
          <h3>Habit-Tracker</h3>
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
      </Grid>
    )
  }
}

export default App
