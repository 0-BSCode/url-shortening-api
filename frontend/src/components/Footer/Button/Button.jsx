import React from 'react'
import styles from '../Footer.module.css'

const Button = ({img, alt}) => {
  return (
    <button className={styles.footer__btn}>
        <img 
        className={styles.footer__btnImg} src={img} alt={alt} />
    </button>
  )
}

export default Button