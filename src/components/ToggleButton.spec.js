import ToggleButton from './ToggleButton'
import { shallow } from 'enzyme'
import React from 'react'
import toJson from 'enzyme-to-json'

describe('ToggleButton', () => {
  let wrapper

  let mockFunction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <ToggleButton text={'foo'} checked={false} onClick={mockFunction} />
    )
  })

  it('reacts on a click', () => {
    expect(mockFunction.mock.calls.length).toBe(0)
    wrapper.simulate('click')
    expect(mockFunction.mock.calls.length).toBe(1)
  })

  it('renders a ToggleButton', () => {
    expect(wrapper.html()).toContain('foo')
  })

  it('changes the color', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.setProps({ checked: true })
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('has a matching snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
