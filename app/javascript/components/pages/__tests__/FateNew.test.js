import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FateNew from '../FateNew'


Enzyme.configure({ adapter: new Adapter() })

describe('when FateNew renders', () => {
    test('should display a form', () => {
        const fateNew = shallow(<FateNew/>)
        const form = fateNew.find("Form")
        expect(form.length).toEqual(1)
    })
})

