

import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../Screens/Login';
import SignupForm from '../Screens/SignupForm';
import Navbar from '../Layout/Navbar';
import ResetPassword from '../Screens/Resetpassword';
import VerifyOtp from '../Screens/VerifyOtp';

function AuthRouter() {
  return (
    <>  
        {/* Navbar */}
       
          <Navbar />
       
      <Routes>
     
        <Route path="/login" element={ <Login />  } />
        <Route path="/signup" element={<SignupForm />   } />
        <Route path="/resetpassword" element={ <ResetPassword />   } />
        <Route path="/verifyotp" element={ <VerifyOtp />   } />
        <Route path="/login" element={ <Login />  } />
      </Routes>
     
    </>
  )
}

export default AuthRouter