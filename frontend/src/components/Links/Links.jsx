import React from 'react'
import styles from './Links.module.css'
import LinkCom from './Link/Link'
import { addLink } from '../../features/links/linkSlice'
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react'

const Links = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const links = useSelector(store => store.links)

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(addLink(text))
    setText('')
  }

  useEffect(() => {
    const errText = document.querySelector(`.${styles.links__error}`)
    const formInput = document.querySelector(`.${styles.links__input}`)
    const customRed = getComputedStyle(document.documentElement).getPropertyValue('--red')
    const customGray = getComputedStyle(document.documentElement).getPropertyValue('--gray-violet')

    if (links['isError']) {
      errText.style.display = 'block';
      formInput.style.border = `0.15rem solid ${customRed}`;
      formInput.style.setProperty("--placeholder-color", customRed);
    } else {
      errText.style.display = 'none';
      formInput.style.border = `none`; 
      formInput.value = text
      formInput.style.setProperty("--placeholder-color", customGray);

    }
  })

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
        {
          links['links'] &&
          Object.keys(links['links']).map(link => (
            <LinkCom 
              key={link} 
              original={link} 
              shortened={links['links'][link]}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Links