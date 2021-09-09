import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FateNew from '../FateNew'

Enzyme.configure({ adapter: new Adapter() })

describe('when FateNew renders', () => {
    test('should display fatenew heading', () => {
        const fateNew = shallow(<FateNew/>)
        const fateNewHeading = fateNew.find("h1")
      expect(fateNewHeading.text()).toEqual("This is the FateNew page")
    })

})
