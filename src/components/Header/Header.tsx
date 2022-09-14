import React, { useState } from 'react'
import styles from './Header.module.css'
import { Container } from '../Container'
import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar'

export const Header = () => {
  const [isToggledSidebar, setIsToggleSidebar] = useState(false)

  const handleToggleSidebar = () => {
    setIsToggleSidebar((preState) => !preState)
  }

  return (
    <>
      <div className={styles.header}>
        <Container>
          <Navbar handleToggleSidebar={handleToggleSidebar} />
        </Container>
      </div>
      <Sidebar handleToggleSidebar={handleToggleSidebar} isToggledSidebar={isToggledSidebar} />
    </>
  )
}
