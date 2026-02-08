import { useState } from 'react'

import './App.css'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import LandingPage from './pages/Landing/LandingPage';


function App() {
 

  return (
    <>
     <Navbar />
      <LandingPage />
      <Footer />
    </>
  )
}

export default App
