import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FateShow from '../FateShow'

Enzyme.configure({ adapter: new Adapter() })

describe('when FateShow renders', () => {
  let event = {
    image_url: 'meow',
    category: 'cat',
    is_public: true,
    description: 'cat text'
  }
  test('should render show page title', () => {
    const fateShow = shallow(<FateShow />)
    const findP = fateShow.find('h1')
    expect(findP.length).toEqual(1)
  })
  test('renders category', () => {
    const fateShow = shallow(<FateShow event={event}/>)
    const showDescription = fateShow.find('p')
    expect(showDescription.length).toEqual(2)
  })
  test('renders category', () => {
    const fateShow = shallow(<FateShow event={event}/>)
    const showImg = fateShow.find('img')
    expect(showImg.length).toEqual(1)
  })

})
