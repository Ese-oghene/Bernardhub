import { useState } from 'react'

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import LandingPage from './pages/Landing/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DriversList from './pages/Drivers/DriversList';
import DriversDetails from './pages/Drivers/DriversDetails';
import ScheduleRide from './pages/Drivers/ScheduleRide';




function App() {
 

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/keke" element={<DriversList />} />
        <Route path="/drivers/:id" element={<DriversDetails />} />
        <Route path="/schedule-ride" element={<ScheduleRide />} />

        {/* Add other routes here later */}
      </Routes>

      <Footer />
    </>
  )
}

export default App
