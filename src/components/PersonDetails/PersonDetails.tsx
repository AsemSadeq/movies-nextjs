import React from 'react'
import { PersonIR } from 'shared'
import { SharedLinks } from '../SharedLinks'
import styles from './PersonDetails.module.css'

interface Props extends Omit<PersonIR, 'profile_path'> {}

export const PersonDetails: React.FC<Props> = ({ name, birthday, biography, homepage, imdb_id }) => {
  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.name}>{name}</div>
      {!!birthday && <div className={styles.birthday}>{birthday}</div>}
      <div className={styles.subTitle}>The Biography</div>
      <div className={styles.bio}>{biography}</div>
      <SharedLinks { ...{imdb_id, homepage }} />
    </div>
  )
}