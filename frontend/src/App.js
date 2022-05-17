import React from 'react';
import logo from './images/logo.svg'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Links from './components/Links/Links';
import Statistics from './components/Statistics/Statistics';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Links />
      <Statistics />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
