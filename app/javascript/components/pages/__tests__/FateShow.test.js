import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FateShow from '../FateShow'

Enzyme.configure({ adapter: new Adapter() })

describe('when FateShow renders', () => {
    test('should display fateshow heading', () => {
        const fateShow = shallow(<FateShow/>)
        const fateShowHeading= fateShow.find("h1")
      expect(fateShowHeading.text()).toEqual("This is the FateShow page")
    })

})
