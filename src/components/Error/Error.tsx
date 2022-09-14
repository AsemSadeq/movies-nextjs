import React from 'react'
import Image from 'next/future/image'
import HomeIcon from 'public/assets/icons/home.svg'
import Link from 'next/link'
import styles  from './Error.module.css'
import { Container } from '../Container'
import { defaultCategory, defaultPage, QUERY_PARAMS } from 'shared'
import { BackToHome } from '../BackToHome'

export const Error = () => {
  return (
    <Container>
      <div className={styles.errorWrapper}>
        <div className={styles.errorTitle}>An error occurred on client</div>
        <Image src='/assets/images/error.svg' width={1080} height={748} alt='Error Image' />
        <BackToHome />
      </div>
    </Container>
  )
}
