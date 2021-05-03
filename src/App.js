import React from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Works from './components/Works'

import './App.scss';
import './styles/global.module.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <Works/>
    </div>
  );
}

export default App;
