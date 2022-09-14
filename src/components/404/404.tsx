import React from 'react'
import Image from 'next/future/image'
import { Container } from '../Container'
import styles from './404.module.css'
import { BackToHome } from '../BackToHome'

export const NotFoundComponent = () => {
  return (
    <Container>
      <div className={styles.errorWrapper}>
        <div className={styles.errorTitle}>Oops!</div>
        <div className={styles.subTitle}>This Page does not exist... </div>
        <div className={styles.errorImg}>
          <Image src='/assets/images/empty.svg' width={423} height={423} alt='404 Image' />
        </div>
        <BackToHome />
      </div>
    </Container>
  )
}