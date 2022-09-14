import { apiEndPointsIR } from './interfaces'

export const TMDB_API_KEY: string = '6f9342289560c9b7352d0d875e2051c0'

export const ImageUrl = (slug: string | null): string => `https://image.tmdb.org/t/p/w342${slug}`

export const PersonUrl = (slug: string | null): string => `https://image.tmdb.org/t/p/w780${slug}`

export const CastImageUrl = (slug: string): string => `https://image.tmdb.org/t/p/w185${slug}`

export const API_ENDPOINTS: apiEndPointsIR = {
  GENRES: `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`,
  POPULAR: (page) =>  `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`,
  TOP_RATED: (page) => `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`,
  UPCOMING: (page) => `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`,
  GENRES_API: (page, genreNumber) => `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreNumber}&page=${page}`,
  MOVIE_API: (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos&language=en-US`,
  CAST_API: (id) => `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}`,
  PERSON_API: (id) => `https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_API_KEY}&language=en-US`
}
