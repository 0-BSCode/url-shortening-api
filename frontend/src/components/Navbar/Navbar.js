import React from 'react'
import logo from '../../images/logo.svg'

const Navbar = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <img src={logo} alt="Shortly" />
      <div style={{width: '5rem', height: '5rem', display: 'inline-block'}}>
        <div style={{width: '100%', height: '1rem', backgroundColor: 'black'}}></div>
        <div style={{width: '100%', height: '1rem', backgroundColor: 'black', marginTop: '1rem', marginBottom: '1rem'}}></div>
        <div style={{width: '100%', height: '1rem', backgroundColor: 'black'}}></div>
      </div>
    </nav>
  )
}

export default Navbar