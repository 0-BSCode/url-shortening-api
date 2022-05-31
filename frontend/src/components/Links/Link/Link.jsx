import React from 'react'
import styles from '../Links.module.css'

const Link = ({original, shortened}) => {
  let width = window.innerWidth
  let originalLink = ''

  const copyText = e => {
    e.preventDefault()
    navigator.clipboard.writeText(shortened)
    const btns = document.querySelectorAll(`.${styles.link__copy}`)
    
    btns.forEach(btn => {
      console.log(btn == e.target)
      if (btn == e.target) {
        btn.classList.add(`${styles.link__copyCopied}`)
        btn.textContent = 'Copied!'
      } else {
        btn.classList.remove(`${styles.link__copyCopied}`)
        btn.textContent = 'Copy'
      }
    })
  }

  if (width >= 1024) {
    if (original.length <= 50) originalLink = original
    else originalLink = `${original.slice(0,50)}...`
  } else {
    originalLink = `${original.slice(0, 27)}...`
  }

  return (
    <div className={`${styles.link} ${styles.links__cell}`}>
        <p className={styles.link__original} href={original}>
            {originalLink}
        </p>
        <div className={styles.link__divider} />
        <p className={styles.link__shortened} >
            {shortened}
        </p>
        <button className={styles.link__copy} onClick={copyText}>
        Copy
        </button>
    </div>
  )
}

export default Link