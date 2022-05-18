import React from 'react'
import styles from './Links.module.css'
import LinkCom from './Link/Link'

const Links = () => {
  return (
    <section>
      <div className={styles.links}>
        <form className={`${styles.links__form} ${styles.links__cell}`}>
          <input 
            className={styles.links__input} type="text" placeholder="Shorten a link here..." />
          <p
            className={styles.links__error}>Please add a link
          </p>
          <button 
            className={styles.links__submit} type="submit">
            Shorten it!
          </button>
        </form>
        <LinkCom />
        <LinkCom />     
      </div>
    </section>
  )
}

export default Links