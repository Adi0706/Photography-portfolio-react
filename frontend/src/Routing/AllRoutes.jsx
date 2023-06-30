import React from 'react'
import About from '../Pages/About';
import Gallery from '../Pages/Gallery';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import {Routes, Route} from 'react-router-dom';

function AllRoutes() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default AllRoutes