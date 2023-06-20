 import React from 'react'
import Navbar from './components/NavBar'
import LandingContent from './components/LandingContent'
import { Routes,Route } from 'react-router-dom'
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact' ;

const App = () => {
  return (
    <div className='container'>
     <Navbar />
     

    <div className='container' >
      <Routes>
        {/* <Route path='/' element ={<App />} ></Route> */}
        <Route path='/About' element={<About />} ></Route>
        <Route path='/Gallery' element={<Gallery />}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>


    </div>
    <LandingContent />
    </div>
  )
}

export default App