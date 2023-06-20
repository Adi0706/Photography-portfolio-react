 import React from 'react'
import Navbar from './components/NavBar'
import LandingContent from './components/LandingContent'
import { Routes,Route } from 'react-router-dom'
import AllRoutes from './Routing/AllRoutes'
// import About from './components/About';
// import Gallery from './components/Gallery';
// import Contact from './components/Contact' ;

const App = () => {
  return (
    <div className='container'>
     <Navbar />
     
      <AllRoutes />

    <LandingContent />
    </div>
  )
}

export default App