import { ImageUrl, PersonUrl, CastImageUrl, API_ENDPOINTS, TMDB_API_KEY } from './apiEndpoints'

const { CAST_API, GENRES_API, MOVIE_API, PERSON_API, POPULAR, TOP_RATED, UPCOMING } = API_ENDPOINTS

describe('apiEndpoints',  () => {
  describe('ImageUrl', () => {
    const slug = '/test'
    it('returns string with slug', () => {
      expect(ImageUrl(slug)).toBe(`https://image.tmdb.org/t/p/w342${slug}`)
    })

    it('returns string with null', () => {
      expect(ImageUrl(null)).toBe('https://image.tmdb.org/t/p/w342null')
    })
  })

  describe('PersonUrl', () => {
    const slug = '/person'
    it('returns string with slug', () => {
      expect(PersonUrl(slug)).toBe(`https://image.tmdb.org/t/p/w780${slug}`)
    })

    it('returns string with null', () => {
      expect(PersonUrl(null)).toBe('https://image.tmdb.org/t/p/w780null')
    })
  })

  describe('CastImageUrl', () => {
    const slug = '/profile'
    it('returns string with slug', () => {
      expect(CastImageUrl(slug)).toBe(`https://image.tmdb.org/t/p/w185${slug}`)
    })
  })

  describe('API_ENDPOINTS',  () => {
    const page = 1
    const id = 'id'

    describe('POPULAR',  () => {
      it('gets popular api', () => {
        expect(POPULAR(page)).toBe(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`)
      })
    })

    describe('TOP_RATED',  () => {
      it('gets top rated api', () => {
        expect(TOP_RATED(page)).toBe(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`)
      })
    })

    describe('UPCOMING',  () => {
      it('gets upcoming api', () => {
        expect(UPCOMING(page)).toBe(`https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`)
      })
    })

    describe('GENRES_API',  () => {
      const genreNumber = 3
      it('gets genres api', () => {
        expect(GENRES_API(page, genreNumber)).toBe(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreNumber}&page=${page}`)
      })
    })

    describe('MOVIE_API',  () => {
      it('gets movie api', () => {
        expect(MOVIE_API(id)).toBe(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos&language=en-US`)
      })
    })

    describe('CAST_API',  () => {
      it('gets cast api', () => {
        expect(CAST_API(id)).toBe(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}`)
      })
    })

    describe('PERSON_API',  () => {
      it('gets person api', () => {
        expect(PERSON_API(id)).toBe(`https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_API_KEY}&language=en-US`)
      })
    })
  })
})
