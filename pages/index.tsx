import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import { Genres, API_ENDPOINTS } from '../shared'
import { Home as HomeComponent } from 'src/components'

export interface Props {
  genres: Genres
}

const { GENRES: GENRES_END_POINT } = API_ENDPOINTS

const Home: NextPage<Props> = ({ genres }) => {

  return (
    <>
      <Head>
        <title>Movies App</title>
      </Head>
      <HomeComponent genres={genres} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(GENRES_END_POINT)
  const genres: Props = (await res.json())

  return { props: genres }
}


export default Home
