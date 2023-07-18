import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Gallery from '../Pages/Gallery';
import Contact from '../Pages/Contact';


const App = () => {
  return (
    
      <div className='container'>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    
  );
};

export default App;
