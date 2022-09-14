import React, { useState } from 'react'
import Image from 'next/future/image'
import { ImageUrl, MovieIR, ROUTES } from 'shared'
import styles from './MovieCard.module.css'
import Link from 'next/link'
import { Rating } from '../Rating'
import { Tooltip } from '../Tooltip'

interface Props extends MovieIR {}

export const MovieCard: React.FC<Props> = ({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
}) => {

  return (
    <Link href={ROUTES.MOVIE(`${id}`)} passHref>
      <a className={styles.movieCard}>
        <div className={styles.moviePoster}>
          <Image width={342} height={100}  src={ImageUrl(poster_path)} alt={title}/>
        </div>
        <div className={styles.movieDetails}>
          <div>{title}</div>
          <Tooltip {...{ content: `${vote_average} average rating on ${vote_count} votes` }}>
            <Rating voteAverage={vote_average} />
          </Tooltip>
        </div>
      </a>
    </Link>
  )
}