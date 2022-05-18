import React from 'react'
import styles from '../Links.module.css'

const Link = () => {
  return (
    <div className={`${styles.link} ${styles.links__cell}`}>
        <p className={styles.link__original}>
            https://www.frontendmentor.io
        </p>
        <div className={styles.link__divider} />
        <p className={styles.link__shortened}>
            https://rel.link/k4IKyk
        </p>
        <button className={styles.link__copy}>
        Copy
        </button>
    </div>
  )
}

export default Link