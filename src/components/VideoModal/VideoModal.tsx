import React  from 'react'
import styles from './VideoModal.module.css'

interface Props {
  videoId: string
  setShowTrailer: React.Dispatch<React.SetStateAction<boolean>>
}

export const VideoModal: React.FC<Props> = ({ videoId, setShowTrailer }) => {
  return (
    <div onClick={() => setShowTrailer(false)} className={styles.modalWrapper}>
      <iframe className={styles.modalContent} src={`https://www.youtube.com/embed/${videoId}`}>
      </iframe>
    </div>
  )
}