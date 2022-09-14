import Image from 'next/future/image'
import React from 'react'
import { ImageUrl, MovieIR } from 'shared'
import { Container } from '../Container'
import { MovieDetails } from '../MovieDetails'
import styles from './Movie.module.css'

interface Props extends MovieIR {}

export const Movie: React.FC<Props> = (props) => {

  return (
    <Container>
      <div className={styles.movieWrapper}>
        <div className={styles.moviePoster}>
          <Image src={ImageUrl(props.poster_path)} width={700} height={1170} alt={props.title} />
        </div>
        <MovieDetails {...props} />
      </div>
    </Container>
  )
}