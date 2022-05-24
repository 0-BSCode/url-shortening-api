import React from 'react'
import logo from '../../images/logo-white.svg'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'
import Links from './Links/Links'
import Button from './Button/Button'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <img className={styles.footer__logo} src={logo} alt="Shortly Logo" />
      <Links 
        title="Features"
        items={["Link Shortening", "Branded Links", "Analytics"]}
      />
      <Links 
        title="Resources"
        items={["Blog", "Developers", "Support"]}
      />
      <Links 
        title="Company"
        items={["About", "Our Team", "Careers", "Contact"]}
      />
      <div className={styles.footer__btns}>
        <Button
          img={facebook}
          alt="Facebook"
        /> 
        <Button
          img={twitter}
          alt="Twitter"
        />
        <Button
          img={pinterest}
          alt="Pinterest"
        />
        <Button
          img={instagram}
          alt="Instagram"
        />                         
      </div>
    </section>
  )
}

export default Footer