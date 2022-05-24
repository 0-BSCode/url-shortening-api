import React from 'react'
import styles from './Boost.module.css'

const Boost = () => {
  return (
    <section className={styles.boost}>
      <div className={styles.boost__content}>
        <h4 className={styles.boost__title}>
          Boost your links today
        </h4>
        <button className={styles.boost__btn}>
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Boost