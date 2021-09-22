import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FateUpdate from '../FateUpdate'

Enzyme.configure({ adapter: new Adapter() })

describe('when FateEdit renders', () => {
    test('should display index heading', () => {
        const fateUpdate = shallow(<FateUpdate/>)
        const form = fateUpdate.find("Form")
        expect(form.length).toEqual(1)
    })

})
