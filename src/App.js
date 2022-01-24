import React, { useState } from 'react';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import './css/App.scss'

const App = () => {
  return (
    <div className = 'home'>
      <Header />
      <Hero />
    </div>
  )
}

export default App;
