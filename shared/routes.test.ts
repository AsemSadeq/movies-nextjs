import { ROUTES } from './routes'

const { MOVIE, PERSON } = ROUTES

describe('ROUTES', () => {
  const id = 'id'
  describe('MOVIE', () => {
    it('gets movie route', () => {
      expect(MOVIE(id)).toBe(`/movie/${id}`)
    })
  })

  describe('PERSON', () => {
    it('gets person route', () => {
      expect(PERSON(id)).toBe(`/person/${id}`)
    })
  })
})