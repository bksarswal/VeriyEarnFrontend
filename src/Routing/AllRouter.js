
import React from 'react'
import { Routes,Route } from "react-router-dom";
import About from '../Screens/About';
import Navbar from '../Layout/Navbar';
import Home from '../Screens/Home';




function AllRouter() {
  return (
    <>   
                {/* Navbar */}
      
          <Navbar />
         
           <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/home" element={<Home /> } />
          <Route path="/about" element={<About />  } />
          {/* <Route path="/*" element={<About />  } /> */}
          
        </Routes>
        
   
    </>
  )
}

export default AllRouter