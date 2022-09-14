import React from 'react'
import { CastImageUrl, defaultPage, ImageUrl, MovieIR, QUERY_PARAMS, ROUTES } from 'shared'
import { Rating } from '../Rating'
import styles from './MovieDetails.module.css'
import DotIcon from 'public/assets/icons/dot.svg'
import Link from 'next/link'
import Image from 'next/future/image'
import { SharedLinks } from '../SharedLinks'

export const MovieDetails: React.FC<MovieIR> = ({
  release_date,
  overview,
  spoken_languages,
  runtime,
  title,
  tagline,
  vote_average,
  homepage,
  imdb_id,
  videos,
  genres,
  credits: { cast }
}) => {
  const releaseDate = new Date(release_date).getFullYear()
  return (
    <div className={styles.movieDetailsWrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.tagline}>{tagline}</div>
      <div className={styles.infoSection}>
        <div className={styles.ratingSection}>
          <Rating voteAverage={vote_average} />
          <div className={styles.voteCount}>{vote_average}</div>
        </div>
        <div className={styles.langTimeRelease}>
          {spoken_languages[0].name} / {runtime} MIN / {releaseDate}
        </div>
      </div>
      <div className={styles.genreTitle}>The Genres</div>
      <div className={styles.genresWrapper}>
        {genres.map(({ id, name }) => (
          <Link key={id} href={`/?${[QUERY_PARAMS.CATEGORY]}=${name}&${[QUERY_PARAMS.PAGE]}=${defaultPage}`}>
            <a>
              <DotIcon fill='currentColor' width={13} height={13}/>
              <button
                onClick={() => {}}
              >{name}</button>
            </a>
          </Link>
        ))}
      </div>
      <div className={styles.genreTitle}>
        The Synopsis
      </div>
      <div className={styles.overview}>{overview}</div>
      <div className={styles.genreTitle}>The cast</div>
      <div className={styles.castSection}>
        <ul>
          {cast.map(({ id, name, profile_path }) => (
            <li key={id}>
              <Link href={ROUTES.PERSON(`${id}`)} passHref>
                <a className={styles.castWrapper}>
                  <Image width={44} height={44} src={profile_path ? CastImageUrl(profile_path) : '/assets/images/person.svg'} alt={name}/>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <SharedLinks { ...{ imdb_id, homepage, videos }} />
    </div>
  )
}