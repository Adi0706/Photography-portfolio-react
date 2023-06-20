import React from 'react'
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import {Routes,Route} from 'react-router-dom';

function AllRoutes() {
  return (
    <div className='container' >
      <Routes>
        {/* <Route path='/' element ={<App />} ></Route> */}
        <Route path='/About' element={<About />} ></Route>
        <Route path='/Gallery' element={<Gallery />}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes