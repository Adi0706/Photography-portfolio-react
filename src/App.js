 import React from 'react'
import Navbar from './components/NavBar'
import LandingContent from './components/LandingContent'
import { Routes,Route } from 'react-router-dom'
import AllRoutes from './Routing/AllRoutes'



const App = () => {
  return (
    <div className='container'>
       <Navbar />  
      
      <AllRoutes />

      

    
    </div>
  )
}

export default App