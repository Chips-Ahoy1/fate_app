import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'

Enzyme.configure({ adapter: new Adapter() })

describe('when Header renders', () => {
    test('should display sign and signout links', () => {
        const header = shallow(<Header />)
        const headerLink = header.find("a")
        expect(headerLink.length).toEqual(1)
    })

})
