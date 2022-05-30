import React from 'react'
import logo from '../../../images/logo.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.nav__linksContainer}>
            <img 
                className={styles.nav__logo}
                src={logo} 
                alt="Shortly Logo"
            />
            <ul className={styles.nav__links}>
                <li className={styles.nav__linkItem}>
                    <a className={styles.nav__link}>
                        Features
                    </a>
                </li>
                <li className={styles.nav__linkItem}>
                    <a className={styles.nav__link}>
                        Pricing
                    </a>
                </li>
                <li className={styles.nav__linkItem}>
                    <a className={styles.nav__link}>
                        Resources
                    </a>
                </li>
            </ul>
        </div>
        <ul className={styles.nav__links}>
            <li className={styles.nav__linkItem}>
                <a className={styles.nav__link}>
                    Login
                </a>
            </li>
            <button className={styles.nav__btn}>
                Sign Up
            </button>
        </ul>
    </nav>
  )
}

export default Navbar