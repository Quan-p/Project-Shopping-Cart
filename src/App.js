import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Homepage from './pages/Homepage';

const App = () => {
  return (
      <div>
        <Homepage />
      </div>
  )
}

export default App;
