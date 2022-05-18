import React from 'react'
import illustrationWorking from '../../images/illustration-working.svg'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img className={styles.hero__img} src={illustrationWorking} alt="Working" />
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          More than just shorter links
        </h1>
        <p className={styles.hero__subtitle}>
        Build your brand’s recognition and get detailed insights 
        on how your links are performing.
        </p>
        <button className={styles.hero__btn}>
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Hero