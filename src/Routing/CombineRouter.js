import React from 'react'
import AllRouter from './AllRouter'
import AuthRouter from './AuthRouter'
import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'
import Dashboardrouter from './Dasboardrouter'


function CombineRouter() {
  return (
   <>
   <div className="min-h-screen flex flex-col">
   <div className="absolute top-0 left-0 right-0 z-50">
               {/* <Navbar/> */}
              
               </div>
<>
{/* <AllRouter/> */}
{/* <AuthRouter/> */}
<Dashboardrouter/>
        </>
       
         
         </div>
         
         <Footer/>
   
   </>
  )
}

export default CombineRouter