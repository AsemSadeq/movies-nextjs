import { useRouter } from 'next/router'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { defaultCategory, defaultPage, getData, getParamFormQuery, MoviesIR } from 'shared'
import { AppCtx } from 'src/context'
import { Container } from '../Container'
import { Error } from '../Error'
import { Loader } from '../Loader'
import { MovieCard } from '../MovieCard'
import { Pagination } from '../Pagination'
import styles from './MoviesList.module.css'

export const MoviesList = () => {
  const { query } = useRouter()
  const activeCategory = useMemo(() => getParamFormQuery(query, 'category', defaultCategory), [query])
  const { allGenres } = useContext(AppCtx)
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState<MoviesIR | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(activeCategory, allGenres, +getParamFormQuery(query, 'page', `${defaultPage}`))
      setMovies(data)
      setIsLoading(false)
    }
    fetchData()

  }, [query])

  return (
    <>
      {
        !movies ? (
          isLoading ? (
            <Loader />
          ) : (
            !isLoading && !movies && <Error />
          )
        ) :
          (
            <Container>
              <>
                <div className={styles.title}>{activeCategory} Movies</div>
                <div className={styles.moviesGrid}>
                  {
                    movies.results.map((movie) => (
                      <MovieCard key={movie.id} {...movie} />
                    ))
                  }
                </div>
                <Pagination totalPages={movies.total_pages} currentPage={movies.page} />
              </>
            </Container>
          )
      }
    </>
  )
}
