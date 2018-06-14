import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ToggleButton from '../src/components/ToggleButton'
import CountButton from '../src/components/CountButton'
import DateSelect from '../src/components/DateSelect'
import SwitchButton from '../src/components/SwitchButton'
import Navigation from '../src/components/Navigation'
import OverviewHabit from '../src/components/OverviewHabit'
import SavedHabits from '../src/components/SavedHabits'

storiesOf('CountButton', module).add('default', () => (
  <CountButton text={'km Rad gefahren'} count={'3'} onCLick={'click'} />
))

storiesOf('DateSelect', module).add('default', () => (
  <DateSelect date="22.02.2018" onClick={'click'} />
))

storiesOf('Navigation', module)
  .add('select left', () => (
    <Navigation selected={0} onClick={action('click')} />
  ))
  .add('select right', () => (
    <Navigation selected={1} onClick={action('click')} />
  ))

storiesOf('SavedHabits', module).add('default', () => (
  <SavedHabits date={'08.06.2018'} habits={'Essen gehen'} />
))

storiesOf('OverviewHabit', module).add('default', () => (
  <OverviewHabit count={'3'} text={'Müll trennen'} />
))

storiesOf('SwitchButton, module')
  .add('left selected', () => (
    <SwitchButton
      selected={0}
      onClick={action('click')}
      textLeft={'All'}
      textRight={'Days'}
    />
  ))
  .add('right selected', () => (
    <SwitchButton
      selected={1}
      onClick={action('click')}
      textLeft={'All'}
      textRight={'Days'}
    />
  ))
storiesOf('ToggleButton', module)
  .add('default', () => (
    <ToggleButton text={'Essen mitnehmen'} checked={false} onClick={'click'} />
  ))
  .add('checked', () => (
    <ToggleButton text={'Essen mitnehmen'} checked={true} onClick={'click'} />
  ))
