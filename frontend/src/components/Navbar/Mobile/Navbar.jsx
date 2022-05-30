import React from 'react'
import logo from '../../../images/logo.svg'
import styles from '../Navbar.module.css'

const Navbar = () => {
  let modalClosed = true

  const toggleMenu = () => {
    const modal = document.querySelector('dialog')
    if (modalClosed) {
      modal.show()
      modalClosed = false
    } else {
      modal.close()
      modalClosed = true
    }
  }

  return (
    <nav className={styles.nav}>
      <img 
        className={styles.nav__logo} 
        src={logo} 
        alt="Shortly" />
      <div 
        className={styles.hamburgerContainer}
        onClick={toggleMenu}
      >
        <div className={styles.hamburgerLine} />
        <div className={styles.hamburgerLine} />
        <div className={styles.hamburgerLine} />
      </div>
    </nav>
  )
}

export default Navbar