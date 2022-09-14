import React, { Dispatch } from 'react'
import styles from './Tooltip.module.css'

interface Props {
  content: string
  children: JSX.Element
}

export const Tooltip: React.FC<Props> = ({ content, children }) => {
  return (
    <div className={styles.tooltipWrapper}>
      <div className={styles.tooltipContent}>
        {content}
      </div>
      <>
        { children }
      </>
    </div>
  )
}