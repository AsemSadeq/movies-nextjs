import Image from 'next/future/image'
import React from 'react'
import { PersonUrl, PersonIR } from 'shared'
import { Container } from '../Container'
import { PersonDetails } from '../PersonDetails'
import styles from './Person.module.css'

export const Person: React.FC<PersonIR> = ({ profile_path, ...rest  }) => {
  return (
    <Container>
      <div className={styles.personWrapper}>
        <div className={styles.personPoster}>
          <Image src={PersonUrl(profile_path)} width={700} height={1170} alt={rest.name} />
        </div>
        <PersonDetails {...rest} />
      </div>
    </Container>
  )
}