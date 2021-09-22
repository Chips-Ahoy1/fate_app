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
      expect(indexHeading.text()).toEqual("View events")
    })
})
