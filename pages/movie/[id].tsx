import type { GetServerSideProps, NextPage, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { API_ENDPOINTS, MovieIR, TMDB_API_KEY } from 'shared'
import { Movie } from 'src/components'


const MoviePage: NextPage<MovieIR> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Movie {...props} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<MovieIR> = async (ctx: GetServerSidePropsContext) => {
  const [res, castRes] = await Promise.all([
    fetch(API_ENDPOINTS.MOVIE_API(ctx.query.id as string)),
    fetch(API_ENDPOINTS.CAST_API(ctx.query.id as string))
  ])

  const data = await res.json()
  const cast = await castRes.json()

  if (data.success === false  || cast.success === false)
    return {
      notFound: true
    }

  return { props: {
    ...data,
    credits: { cast:  cast.cast },
  } }
}

export default MoviePage
