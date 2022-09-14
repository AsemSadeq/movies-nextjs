import React from 'react'
import styles from './Container.module.css'

interface Props {
  children: JSX.Element
}

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>{ children }</div>
  )
}
