
import React from 'react'
import { Routes,Route } from "react-router-dom";
import About from '../Screens/About';
import Navbar from '../Layout/Navbar';
import Home from '../Screens/Home';




function AllRouter() {
  return (
    <>   <div className="min-h-screen flex flex-col">
                {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar />
        </div>   
           <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/home" element={<Home /> } />
          <Route path="/about" element={<About />  } />
          {/* <Route path="/*" element={<About />  } /> */}
          
        </Routes>
        </div>
   
    </>
  )
}

export default AllRouter