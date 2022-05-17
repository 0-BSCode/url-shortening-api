import React from 'react'
import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <section>
      <img src={logo} alt="Shortly Logo" />
      <ul>
        <li>
          Features
        </li>
        <li>
          Link Shortening
        </li>
        <li>
          Branded Links
        </li>
        <li>
          Analytics
        </li>
      </ul>
      <ul>
        <li>
          Resources
        </li>
        <li>
          Blog
        </li>
        <li>
          Developers
        </li>
        <li>
          Support
        </li>
      </ul>
      <ul>
        <li>
          Company
        </li>
        <li>
          About
        </li>
        <li>
          Our Team
        </li>
        <li>
          Careers
        </li>
        <li>
          Contact
        </li>
      </ul>
      <ul>
        <li>
          <a>
            Facebook
          </a>
        </li>
        <li>
          <a>
            Twitter
          </a>
        </li>
        <li>
          <a>
            Pinterest
          </a>
        </li>
        <li>
          <a>
            Instagram
          </a>
        </li>                        
      </ul>     
    </section>
  )
}

export default Footer