import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter() })

describe('when Home renders', () => {
  test('should display home page', () => {
      const home = shallow(<Home/>)
      const homeText = home.find("h1")
    expect(homeText.text()).toEqual("Fate")
  })
})
