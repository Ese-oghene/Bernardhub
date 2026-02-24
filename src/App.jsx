import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import LandingPage from './pages/Landing/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DriversList from './pages/Drivers/DriversList';
import DriversDetails from './pages/Drivers/DriversDetails';
import ScheduleRide from './pages/Drivers/ScheduleRide';
import AgentsList from "./pages/Agents/AgentsList";
import AgentDetail from "./pages/Agents/AgentDetail";
import Register from "./pages/Auth/Register";
// import Login from "../pages/Auth/Login"; // later


function App() {
 
  return (
  
      <Routes>

        {/* MAIN WEBSITE LAYOUT (WITH NAVBAR & FOOTER) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/keke" element={<DriversList />} />
          <Route path="/drivers/:id" element={<DriversDetails />} />
          <Route path="/schedule-ride" element={<ScheduleRide />} />

          {/* ✅ REAL ESTATE ROUTES */}
          <Route path="/real-estate" element={<AgentsList />} />
          <Route path="/agents/:id" element={<AgentDetail />} />

        </Route>

        {/* AUTH LAYOUT (NO NAVBAR & FOOTER) */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>

      </Routes>
  )
}

export default App
