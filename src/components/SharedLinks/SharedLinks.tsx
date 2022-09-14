import React, { useMemo, useState } from 'react'
import styles from './SharedLinks.module.css'
import LinkIcon from 'public/assets/icons/link.svg'
import PlayIcon from 'public/assets/icons/play.svg'
import ImdbIcon from 'public/assets/icons/imdb.svg'
import { TrailerIR } from 'shared'
import { VideoModal } from '../VideoModal'


interface Props {
  imdb_id: string | null
  homepage: string | null
  videos?: {
    results: TrailerIR[]
  }
}

export const SharedLinks: React.FC<Props> = ({ imdb_id, homepage, videos: { results = [] } = {} }) => {
  const { key: videoId } = results.find(({ type, site }) => site === 'YouTube' && type === 'Trailer') || {}
  const [showTrailer, setShowTrailer] = useState<boolean>(false)

  return (
    <div className={styles.linksWrapper}>
      { homepage && (
        <a href={homepage} target="_blank" rel="noreferrer">
          <span>Website</span>
          <LinkIcon fill='currentColor' width={12}  height={12} />
        </a>
      )}

      { imdb_id && (
        <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank" rel="noreferrer">
          <span>IMDB</span>
          <ImdbIcon fill='currentColor' width={12}  height={12} />
        </a>
      )}
      {
        !!results.length && (
          <button onClick={() => setShowTrailer(() => true)}>
            <span>Trailer</span>
            <PlayIcon fill='currentColor' width={12}  height={12} />
          </button>
        )
      }
      {
        showTrailer && <VideoModal setShowTrailer={setShowTrailer} videoId={videoId as string} />
      }
    </div>
  )
}