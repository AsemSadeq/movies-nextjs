export interface apiEndPointsIR {
  GENRES: string
  POPULAR: (page: number) => string
  TOP_RATED: (page: number) => string
  UPCOMING: (page: number) => string
  GENRES_API: (page: number, genreNumber: number) => string
  MOVIE_API: (id: string) => string
  CAST_API: (id: string) => string
  PERSON_API: (id: string) => string
}


export interface Genre {
  id: number,
  name: string
}

export interface PersonIR {
  biography: string
  birthday: string | null
  homepage: string | null
  profile_path: string | null
  id: number
  imdb_id: string
  name: string
}

export type Genres = [Genre]

export interface CastIR {
  id: number
  name: string
  profile_path: string | undefined
}

export interface TrailerIR {
  key: string
  id: string
  site: string
  type: string
}

export interface MovieIR {
  poster_path: string | null
  release_date: string
  id: number
  title: string
  tagline: string | null
  vote_count: number
  vote_average: number
  runtime: number
  overview: string
  imdb_id: string | null
  homepage: string | null
  videos: {
    results: TrailerIR[]
  }
  genres: Genres
  credits: {
    cast: CastIR[]
  },
  spoken_languages: ({
    english_name: string
    iso_639_1: string
    name: string
  })[],
}

export interface MoviesIR {
  page: number
  results: MovieIR[]
  total_pages: number
}

export enum DISCOVER_OPTIONS {
  TOP_RATED = 'TOP_RATED',
  POPULAR = 'POPULAR',
  UPCOMING = 'UPCOMING'
}
