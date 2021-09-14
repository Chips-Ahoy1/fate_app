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

// fdescribe('when click on submit redirected to index', () => {
//     test('should redirect to index after click submit', () => {
//       const fateNew = shallow(<FateNew />)
//       expect(fateNew.this.props.setState({submitted: true})).to_be(true)
//     })
//
// })
//
// describe('new event added to index page', () => {
//     test('should show new event on index page', () => {
//
//     })
// })
