import  React, { useContext, useMemo, useState } from 'react'
import Image from 'next/future/image'
import styles from './Navbar.module.css'
import SearchIcon from 'public/assets/icons/search.svg'
import { AppCtx, Theme } from '../../context'
import { getIsDarkTheme, setIsDarkTheme, unsetIsDarkTheme } from 'shared'

interface Props {
  handleToggleSidebar: () => void
}

export const  Navbar: React.FC<Props>  = ({ handleToggleSidebar }) => {
  const { theme, setTheme } = useContext(AppCtx)
  const handleToggleTheme = () => {
    setTheme(getIsDarkTheme() ? Theme.LIGHT : Theme.DARK)

    if (!getIsDarkTheme()) {
      setIsDarkTheme()
      return
    }

    unsetIsDarkTheme()
  }

  return (
    <>
      <nav className={styles.navbar}>
        <button className={styles.hamburgerButton} onClick={() => handleToggleSidebar()}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={styles.rightNav}>
          <div className={styles.toggleTheme}>
            <button
              onClick={() => handleToggleTheme()}
              className={`${ !getIsDarkTheme() && styles.light }`}
            >☀</button>
            <div className={styles.toggleBtn}>
              <input
                id='toggleTheme'
                type='checkbox'
                checked={theme === Theme.DARK}
                onChange={() => handleToggleTheme()}
              />
              <label htmlFor='toggleTheme'></label>
            </div>
            <button
              onClick={() => handleToggleTheme()}
              className={`${ getIsDarkTheme() && styles.moon }`}
            >☾</button>
          </div>
        </div>
      </nav>
    </>
  )
}