import React from 'react';
import { Routes, Route } from 'react-router-dom';

import DashbordNavbar from '../Layout/DasbordNavbar/DashborNavmain/DashbordNavmain';
import Dashboard from '../Screens/Dashboard/Dashboard';

function Dashboardrouter() {
  return (
    <>
      {/* Add the Dashboard Navbar */}
      <DashbordNavbar />
      
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default Dashboardrouter;
