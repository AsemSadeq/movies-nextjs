import React, { useCallback, useContext, useMemo } from 'react'
import { defaultCategory, defaultPage, QUERY_PARAMS, ROUTES, SidebarContent } from 'shared'
import { AppCtx } from 'src/context'
import styles from './Sidebar.module.css'
import DotIcon from 'public/assets/icons/dot.svg'
import Logo from 'public/assets/icons/logo.svg'
import TmdbLogo from 'public/assets/icons/tmdbgreen.svg'
import Router, { useRouter } from 'next/router'

interface Props {
  isToggledSidebar: boolean
  handleToggleSidebar: () => void
}

export const Sidebar: React.FC<Props> = ({ isToggledSidebar, handleToggleSidebar }) => {
  const { query, pathname } = useRouter()
  const { allGenres } = useContext(AppCtx)
  const activeCategory = useMemo(() => typeof query.category === 'string' ?  query.category: defaultCategory, [query])

  const isActive = useCallback((label: string) =>
    label.toLocaleLowerCase() === activeCategory.toLocaleLowerCase() && pathname === ROUTES.HOME,
  [activeCategory, pathname])

  const handleNavigation = (category: string) => {
    Router.replace({
      pathname: ROUTES.HOME,
      query: {
        [QUERY_PARAMS.CATEGORY]: category,
        [QUERY_PARAMS.PAGE]: defaultPage
      }
    })
    handleToggleSidebar()
  }
  return (
    <>
      <div className={`${styles.sidebar} ${ isToggledSidebar && styles.openSidebar }`}>
        <Logo className={styles.logo} fill='currentColor' />
        <div className={styles.mainCategory}>{SidebarContent.discoverCategory}</div>
        {SidebarContent.discover.map(({ name, Icon }) => (
          <div key={name} className={`${styles.subCategory} ${ isActive(name) ? styles.activeMenu : '' }`}>
            <Icon fill='currentColor' width={9} height={9} />
            <button
              className={`${ isActive(name) ? styles.activeMenu : ''}`}
              onClick={() => handleNavigation(name)}
            >{name}</button>
          </div>
        ))}

        <div className={styles.mainCategory}>{SidebarContent.genresCategory}</div>

        {(allGenres || []).map(({ id, name }) => (
          <div key={id} className={`${styles.subCategory} ${ isActive(name) ? styles.activeMenu : '' }`}>
            <DotIcon fill='currentColor' width={9} height={9}/>
            <button
              onClick={() => handleNavigation(name)}
            >{name}</button>
          </div>
        ))}

        <TmdbLogo className={styles.greenLogo} fill='currentColor' />
      </div>
      <div onClick={handleToggleSidebar} className={`${styles.overlay} ${isToggledSidebar && styles.openSidebar}`}></div>
    </>
  )
}