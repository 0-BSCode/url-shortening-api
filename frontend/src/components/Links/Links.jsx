import React from 'react'
import styles from './Links.module.css'

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
        <div>
          <p>
            https://www.frontendmentor.io
          </p>
          <span>

          </span>
          <p>
            https://rel.link/k4IKyk
          </p>
          <button>
            Copy
          </button>
        </div>
        <div>
          <p>
            https://www.frontendmentor.io
          </p>
          <span>

          </span>
          <p>
            https://rel.link/k4IKyk
          </p>
          <button>
            Copied!
          </button>
        </div>      
      </div>
    </section>
  )
}

export default Links