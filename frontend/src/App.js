import React from 'react';
import './App.css';
import NavbarMobile from './components/Navbar/Mobile/Navbar'
import Hero from './components/Hero/Hero';
import Links from './components/Links/Links';
import Statistics from './components/Statistics/Statistics';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <>
      <NavbarMobile />
      <Menu />
      <Hero />
      <Links />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
