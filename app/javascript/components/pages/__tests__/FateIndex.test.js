import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FateIndex, {CardComponent} from '../FateIndex'

Enzyme.configure({ adapter: new Adapter() })

describe('when FateIndex renders', () => {
  let events = [{
    image_url: 'meow',
    category: 'cat',
    is_public: true,
    description: 'cat text'
  }]
    test('should display index heading', () => {
        const fateIndex = shallow(<FateIndex/>)
        const indexHeading = fateIndex.find("h2")
      expect(indexHeading.text()).toEqual("This is Fate Index Page Test1")
    })
    test('renders description', () => {
      const fateIndex = shallow(<CardComponent event={events[0]}/>)
      const showDescription = fateIndex.find('p')
      expect(showDescription.text()).toBe("cat text")
    })
})
