import React from 'react'
import styles from '../Footer.module.css'

const Button = ({img, hov, alt}) => {
  return (
    <button className={styles.footer__btn}>
        <img 
          className={styles.footer__btnImg} 
          src={img} 
          alt={alt}
          onMouseEnter={e => e.target.src = hov}
          onMouseOut={e => e.target.src = img}
        />
    </button>
  )
}

export default Button