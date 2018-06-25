import React, { Component } from 'react'
import uid from 'uid'
import styled from 'react-emotion'

import SwitchButtonSettings from '../components/SwitchButtonSettings'
import SelectButton from '../components/SelectButton'

const Button = styled('div')`
  border: 2px solid #9fffcb;
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 100px;
`

const StyledInput = styled('input')`
  margin: 10px;
`

const HabitForm = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`

export default class SettingsFormPage extends Component {
  state = {
    selectedCategory: 0,
    selectedType: 1,
    habitText: ''
  }

  onCategorySelected = index => {
    this.setState({
      selectedCategory: index
    })
  }

  onTypeSelected = index => {
    this.setState({
      selectedType: index
    })
  }

  onCreateHabit = () => {
    const habit = {
      text: this.state.habitText,
      id: uid(),
      type: this.state.selectedType === 0 ? 'toggle' : 'count',
      category: this.state.selectedCategory === 0 ? 'good' : 'bad'
    }
    this.props.onCreateHabit(habit)
    this.setState({
      habitText: ''
    })
  }
  render() {
    return (
      <div>
        <SwitchButtonSettings />
        <HabitForm>
          <label>Name</label>
          <StyledInput
            type="text"
            name="name"
            value={this.state.habitText}
            onChange={e => this.setState({ habitText: e.target.value })}
            required
          />
          Wie kannst Du mein Erledigen überwachen? Mit einem ...
          <SelectButton
            text1={'Erledigt-Button'}
            text2={'Zähl-Button'}
            onClick={this.onTypeSelected}
            selectedIndex={this.state.selectedType}
          />
          In welcher Kategorie soll ich angezeigt werden?
          <SelectButton
            text1={'Gut'}
            text2={'Schlecht'}
            onClick={this.onCategorySelected}
            selectedIndex={this.state.selectedCategory}
          />
          <Button type="submit" onClick={this.onCreateHabit}>
            Speichern
          </Button>
        </HabitForm>
      </div>
    )
  }
}
