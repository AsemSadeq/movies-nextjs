import { API_ENDPOINTS } from './apiEndpoints'
import { DISCOVER_OPTIONS, Genre, Genres, MoviesIR } from './interfaces'

export const getData = async (slug: string, genres: Genres, page: number): Promise<MoviesIR | null> => {
  try {
    const endpoint = prepareApiEndpoint(slug, genres, page)

    const res = await fetch(endpoint)
    const data = await res.json()

    if (data?.errors) {
      return null
    }

    return data
  } catch (err) {
    return null
  }
}

const prepareApiEndpoint = (slug: string, genres: Genres, page: number): string => {
  const genre = getCurrentGenre(slug, genres)

  if (genre) {
    return API_ENDPOINTS.GENRES_API(page, genre.id)
  }

  const key: DISCOVER_OPTIONS  = slug.split(' ').join('_').toUpperCase() as DISCOVER_OPTIONS

  return API_ENDPOINTS[key](page)
}

const getCurrentGenre = (slug: string, genres: Genres): Genre | undefined => {
  const [ genre ] = genres.filter((genre) => genre.name === slug)

  return genre
}