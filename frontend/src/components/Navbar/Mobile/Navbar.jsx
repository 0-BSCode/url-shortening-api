import React from 'react'
import logo from '../../../images/logo.svg'
import styles from '../Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Shortly" />
      <div className={styles.hamburgerContainer}>
        <div className={styles.hamburgerLine} />
        <div className={styles.hamburgerLine} />
        <div className={styles.hamburgerLine} />
      </div>
    </nav>
  )
}

export default Navbar