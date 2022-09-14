import { json } from 'stream/consumers'
import { getData } from './apiRequest'
import { Genre } from './interfaces'

describe('apiRequest' , () => {
  let slug = 'slug'
  let page = 1
  let genre: Genre = {
    id: 1,
    name: 'slug'
  }
  let data = 'data'

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(data),
    })
  })

  describe('getData', () => {
    it('should fetch function called', async () => {
      await getData(slug, [genre], page)
      expect(fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/discover/movie?api_key=6f9342289560c9b7352d0d875e2051c0&with_genres=1&page=1')
    })

    it('should fetch function called and returns null', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve({ errors: 'error' }),
      })

      const result = await getData(slug, [genre], page)
      expect(result).toBeNull()
    })

    it('should catch error and returns null', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.reject(new Error('error')),
      })

      const result = await getData(slug, [genre], page)
      expect(result).toBeNull()
    })


    it('when the url is not genre api', async () => {
      const result = await getData('popular', [genre], page)
      expect(fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/popular?api_key=6f9342289560c9b7352d0d875e2051c0&language=en-US&page=1')
    })
  })
})
