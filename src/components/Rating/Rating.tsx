import React, { useMemo } from 'react'
import styles from './Rating.module.css'

interface Props {
  voteAverage: number
}

export const Rating: React.FC<Props>  = ({ voteAverage }) => {
  const voteAvgVal = useMemo<number>(() => Math.round(voteAverage / 2), [voteAverage])

  return (
    <div className={styles.rateSection}>
      {[...Array(5)].map((_, index) => (
        <span className={`${ index + 1 <= voteAvgVal && styles.goldStar}`} key={index}>★</span>
      ))}
    </div>
  )
}

