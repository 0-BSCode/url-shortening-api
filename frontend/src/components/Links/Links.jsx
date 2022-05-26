import React from 'react'
import styles from './Links.module.css'
import LinkCom from './Link/Link'
import { addLink } from '../../features/links/linkSlice'
import {useDispatch} from 'react-redux'
import { useState } from 'react'

const Links = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addLink(text))
  }

  return (
    <section>
      <div className={styles.links}>
        <form 
        className={`${styles.links__form} ${styles.links__cell}`}
        onSubmit={handleSubmit}
        >
          <input 
            className={styles.links__input} 
            type="text" 
            placeholder="Shorten a link here..."
            onChange={e => setText(e.target.value)}
          />
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