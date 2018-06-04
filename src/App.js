import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import habits from './data/habits'

import ToggleButton from './components/ToggleButton'

injectGlobal(`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #25A18E;
    color: #9FFFCB;
    height: 100vh;
    overflow: scroll;
  }
`)

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
  toggleHabit(id) {
    const allHabits = this.state.habits
    const habitIndex = allHabits.findIndex(habit => habit.id === id)
    const oldHabit = allHabits[habitIndex]

    const newHabits = [
      ...allHabits.slice(0, habitIndex),
      { ...oldHabit, checked: !oldHabit.checked },
      ...allHabits.slice(habitIndex + 1)
    ]

    this.setState({ habits: newHabits })
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
          {this.state.habits.map(habit => (
            <ToggleButton
              text={habit.text}
              checked={habit.checked}
              key={habit.id}
              onClick={e => this.toggleHabit(habit.id)}
            />
          ))}
        </List>
      </Grid>
    )
  }
}

export default App
