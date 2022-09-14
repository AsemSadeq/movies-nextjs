import React, { useEffect, useState } from 'react'
import { Genres, getIsDarkTheme } from 'shared'
import { Theme, AppCtx } from 'src/context'
import { Header } from '../Header'
import styles from './Layout.module.css'

export interface LayoutProps {
  allGenres: Genres
  children: JSX.Element
}

export const Layout: React.FC<LayoutProps> = ({ allGenres, children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT)

  useEffect(() => {
    setTheme(getIsDarkTheme() ? Theme.DARK : Theme.LIGHT)
  }, [])

  return (
    <AppCtx.Provider value={{ allGenres, setTheme, theme }}>
      <div className={styles.themeWrapper} data-theme={theme}>
        <Header />
        <div className={styles.pageWrapper}>
          { children }
        </div>
      </div>
    </AppCtx.Provider>
  )
}
