import React from 'react'
import styles from './Pagination.module.css'
import Router, { useRouter } from 'next/router'
import ArrowLeft from 'public/assets/icons/arrow-left.svg'
import ArrowRight from 'public/assets/icons/arrow-right.svg'
import { QUERY_PARAMS } from 'shared'


interface Props {
  currentPage: number
  totalPages: number
}

export const Pagination: React.FC<Props> = ({ currentPage, totalPages }) => {
  const { query } = useRouter()
  const handlePrevPage = () => {
    Router.replace({
      query: {
        ...query,
        [QUERY_PARAMS.PAGE]: ++currentPage
      }
    })
  }

  const handleNextPage = () => {
    Router.replace({
      query: {
        ...query,
        [QUERY_PARAMS.PAGE]: ++currentPage
      }
    })
  }

  return(
    <div className={styles.paginationWrapper}>
      <button onClick={() => handlePrevPage()} className={`${styles.page} ${ currentPage <= 1 && styles.hidePage}`}>
        <ArrowLeft fill='currentColor' width={13} height={13} />
        <div>Page {currentPage - 1}</div>
      </button>
      <button onClick={() => handleNextPage()} className={`${styles.page} ${ currentPage === totalPages && styles.hidePage}`}>
        <div>Page {currentPage + 1}</div>
        <ArrowRight fill='currentColor' width={13} height={13} />
      </button>
    </div>
  )
}