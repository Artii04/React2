import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Home />
      </div>
      <div>
        <Contact />
      </div>
    </>
  )
}

export default App
