import React, { useEffect, useState } from 'react'
import  Router, { useRouter } from 'next/router'
import { isEmptyObject, defaultCategory, defaultPage, Genres, QUERY_PARAMS } from 'shared'
import { MoviesList } from '../MoviesList'

interface HomeProps {
    genres: Genres
}

export const Home: React.FC<HomeProps> = () => {
  const { query } = useRouter()


  useEffect(() => {
    if (isEmptyObject(query) || (!query.category || !query.page)) {
      Router.replace({
        query: {
          [QUERY_PARAMS.CATEGORY]: defaultCategory,
          [QUERY_PARAMS.PAGE]: defaultPage
        }
      })
    }
  }, [])

  return (
    <MoviesList />
  )
}
