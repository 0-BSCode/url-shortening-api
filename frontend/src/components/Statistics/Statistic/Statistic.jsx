import React from 'react'
import styles from '../Statistics.module.css'

const Statistic = ({logo, title, subtitle}) => {
  return (
    <div className={styles.stat}>
      <div className={styles.stat__imgBackground} style={{backgroundColor: 'black'}}>
        <img className={styles.stat__img} src={logo} alt="Brand Recognition" />
      </div>
      <h3 className={styles.stat__title}>
        {title}
      </h3>
      <p className={styles.stat__subtitle}>
          {subtitle}
      </p>
    </div>
  )
}

export default Statistic