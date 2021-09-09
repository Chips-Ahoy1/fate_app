import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('when NotFound renders', () => {
    test('should display NotFound page', () => {
        const notFound = shallow(<NotFound/>)
        const notFoundLink = notFound.find("h1")
      expect(notFoundLink.text()).toEqual("This is the NotFound page")
    })

})
