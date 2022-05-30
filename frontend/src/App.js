import React from 'react';
import './App.css';
import NavbarMobile from './components/Navbar/Mobile/Navbar'
import NavbarDesktop from './components/Navbar/Desktop/Navbar'
import Hero from './components/Hero/Hero';
import Links from './components/Links/Links';
import Statistics from './components/Statistics/Statistics';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initialize } from './features/links/linkSlice'

function App() {
  const dispatch = useDispatch()
  let width = window.innerWidth

  useEffect(() => {
    dispatch(initialize())
  }, [dispatch])

  return (
    <>
      {width >= 1024?
        <NavbarDesktop />:
        <NavbarMobile />
      }
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
