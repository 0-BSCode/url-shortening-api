import React from 'react'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <dialog open className={styles.menu}>
        <ul className={styles.menu__links}>
            <li className={styles.menu__linkItem}>
                <a  className={styles.menu__link}>
                    Features
                </a>
            </li>
            <li className={styles.menu__linkItem}>
                <a className={styles.menu__link}>
                    Pricing
                </a>
            </li>
            <li className={styles.menu__linkItem}>
                <a className={styles.menu__link}>
                    Resources
                </a>
            </li>   
            <li>
                <span className={styles.menu__divider}/>
            </li>
            <li className={styles.menu__linkItem}>
                <a className={styles.menu__link}>
                    Login
                </a>
            </li>
            <li className={styles.menu__linkItem}>
                <button className={styles.menu__linkBtn}>
                    Sign Up
                </button>
            </li>  
        </ul>
    </dialog>
  )
}

export default Menu