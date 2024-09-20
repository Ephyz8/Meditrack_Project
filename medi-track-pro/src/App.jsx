import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; 
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import EngineerDashboard from "./pages/EngineerDashboard";
import UserDashboard from "./components/UserDashboard";
import EquipmentOverview from "./components/EquipmentOverview";
import FaultReporting from "./components/FaultReporting";
import JobCardSummary from "./components/JobCardSummary";
import PPMTasks from "./components/PPMTasks";
import DailyLogsOverview from "./components/DailyLogsOverview";
import Navbar from "./components/Navbar"; 
import PublicNavbar from "./components/PublicNavbar"; 
import Footer from "./components/Footer";
import OTPVerification from "./components/OTPVerification";
import { isAuthenticated } from './utils/Auth'; // Import the authentication utility
import axios from "axios";
import "./App.css";

const App = () => {
  // eslint-disable-next-line
  const [role, setRole] = useState(null);
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    role: null,
  });

  // Fetch user role and authentication status when the component mounts
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        if (isAuthenticated()) {
          const response = await axios.get('http://localhost:8000/api/v1/auth/user-role/');
          if (response.data && response.data.role) {
            setAuthState({
              isAuthenticated: true,
              role: response.data.role,
            });
          }
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
        setAuthState({ isAuthenticated: false, role: null });
      }
    };
    
    fetchUserRole();
  }, []);

  const { isAuthenticated: loggedIn, role: userRole } = authState;

  return (
    <div className="app-container">
      {/* Show PublicNavbar if user is not authenticated, otherwise show authenticated Navbar */}
      {loggedIn ? <Navbar /> : <PublicNavbar />}

      <main>
        <Routes>
          {/* Publicly accessible routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verification" element={<OTPVerification />} />

          {/* Authenticated user routes */}
          {loggedIn && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Engineer-specific routes */}
              {userRole === "engineer" && (
                <>
                  <Route path="/engineer-dashboard" element={<EngineerDashboard />} />
                  <Route path="/job-cards" element={<JobCardSummary />} />
                  <Route path="/ppm-tasks" element={<PPMTasks />} />
                  <Route path="/daily-logs" element={<DailyLogsOverview />} />
                </>
              )}

              {/* Medical Equipment User-specific routes */}
              {userRole === "user" && (
                <>
                  <Route path="/user-dashboard" element={<UserDashboard />} />
                  <Route path="/equipment" element={<EquipmentOverview />} />
                  <Route path="/fault-reporting" element={<FaultReporting />} />
                </>
              )}
            </>
          )}
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
