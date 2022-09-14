import React from 'react'
import { Container } from '../Container'
import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <Container>
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}></div>
      </div>
    </Container>
  )
}