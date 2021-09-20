import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CardComponent from '../CardComponent'

Enzyme.configure({ adapter: new Adapter() })

describe('when FateIndex renders', () => {
  let events = [{
    image_url: 'meow',
    category: 'cat',
    is_public: true,
    description: 'cat text'
  }]
    test('renders description', () => {
      const fateIndex = shallow(<CardComponent event={events[0]}/>)
      const showDescription = fateIndex.find('p')
    expect(showDescription.text()).toBe("cat text")
    })
})
