import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ToggleButton from '../src/components/ToggleButton'
import CountButton from '../src/components/CountButton'

storiesOf('ToggleButton', module)
  .add('default', () => (
    <ToggleButton text={'Essen mitnehmen'} checked={false} onClick={'click'} />
  ))
  .add('checked', () => (
    <ToggleButton text={'Essen mitnehmen'} checked={true} onClick={'click'} />
  ))

storiesOf('CountButton', module).add('default', () => (
  <CountButton text={'km Rad gefahren'} count={'3'} onCLick={'click'} />
))
