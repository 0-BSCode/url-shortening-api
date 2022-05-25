import React from 'react'
import styles from '../Footer.module.css'

const Links = ({title, items}) => {

  return (
    <ul className={styles.footer__links}>
        <li className={`${styles.footer__link} ${styles.footer__linkTitle}`}>
            {title}
        </li>
        {items.map(item => (
            <li 
                className={styles.footer__link}
                key={item}>{item}</li>
        ))}
    </ul>
  )
}

export default Links