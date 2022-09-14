import Link from 'next/link'
import React from 'react'
import HomeIcon from 'public/assets/icons/home.svg'
import { QUERY_PARAMS, defaultCategory, defaultPage } from 'shared'
import styles from './BackToHome.module.css'

export const BackToHome = () => {
  return (
    <Link passHref href={`/?${[QUERY_PARAMS.CATEGORY]}=${defaultCategory}&${[QUERY_PARAMS.PAGE]}=${defaultPage}`}>
      <a className={styles.homeLink}>
        <HomeIcon fill='currentColor' width={14} height={14} />
        <div>Home</div>
      </a>
    </Link>
  )
}
