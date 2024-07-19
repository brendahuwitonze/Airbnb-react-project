import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import Navbar from './navBar'
import Card from './card'


function App() {
 
  return(
    <>
     <Navbar/>
    <div className='container'>
    <Hero/>
    <Card/>
    </div>
   
    </>
  )
}

export default App
