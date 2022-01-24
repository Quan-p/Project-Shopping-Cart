import React, { useState } from 'react';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import MainSection from './components/main-section/main-section';
import './css/App.scss'

const App = () => {
  return (
    <div className = 'home'>
      <Header />
      <Hero />
      <MainSection />
    </div>
  )
}

export default App;
