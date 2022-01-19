import React, { useState } from 'react';
import Homepage from './pages/Homepage';
import './css/App.css'
import Counter from './components/Counter';

const App = () => {
  return (
    <div className = 'home'>
      <Homepage />
      <Counter />
    </div>
  )
}

export default App;
