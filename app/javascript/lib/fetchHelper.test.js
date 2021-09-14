import {fetchHelper} from './fetchHelper'
import {mockResponse} from './mockUnSplashResponse'

describe('lib/fetchHelper', () => {
    it('exist', () => {
      expect(fetchHelper).toBeTruthy()
    })
    it('returns emtpy array when no response', () => {
      const actual = fetchHelper()
      expect(actual.length).toBe(0)
    })
    it('returns an array of images', () => {
      const actual = fetchHelper(mockResponse)
      // console.log(actual.results.map(value => {
      //   value.urls
      // } ));
      console.log(actual.map(img => {
        img.urls.regular
      }))
      expect(actual.length).toBe(3)
    })
    xit('returns an array of urls', () => {
      const expected = "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTkwOTR8MHwxfHNlYXJjaHwxfHxkb2d8ZW58MHx8fHwxNjMxNjQyNjY1&ixlib=rb-1.2.1&q=80&w=1080"
      const actual = fetchHelper(mockResponse)
      expect(actual[0]).toBe(expected)
    })
})
