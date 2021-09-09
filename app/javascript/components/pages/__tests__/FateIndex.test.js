import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FateIndex from '../FateIndex'

Enzyme.configure({ adapter: new Adapter() })

describe('when FateIndex renders', () => {
    test('should display index heading', () => {
        const fateIndex = shallow(<FateIndex/>)
        const indexHeading = fateIndex.find("h1")
      expect(indexHeading.text()).toEqual("This is the FateIndex page")
    })

})
