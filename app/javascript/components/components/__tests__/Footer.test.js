import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter() })

describe('should render a footer page', () => {
  test('should display index heading', () => {
      const footer = shallow(<Footer/>)
      const footerText = footer.find("h1")
    expect(footerText.text()).toEqual("This is the Footer page")
  })

})
