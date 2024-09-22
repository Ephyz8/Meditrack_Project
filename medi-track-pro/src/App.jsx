import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./components/Register";
import Login from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import EngineerDashboard from "./components/EngineerDashboard";
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
import axios from "axios";
import { isAuthenticated } from './utils/Auth';
import "./App.css";

// Custom hook to fetch user role
const useFetchUserRole = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (isAuthenticated()) {
        try {
          const response = await axios.get('/api/v1/auth/user-role/');
          if (response.data && response.data.role) {
            setRole(response.data.role);
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
          setRole(null); // Handle errors by resetting the role
        }
      }
      setLoading(false);
    };

    fetchUserRole();
  }, []);

  return { role, loading };
};

const PrivateRoute = ({ children, roleRequired }) => {
  const loggedIn = isAuthenticated();
  const { role, loading } = useFetchUserRole();

  if (loading) {
    return <div className="loading"><h1>Loading...</h1></div>;
  }

  // Check if the user is logged in and if their role matches the required role
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  if (roleRequired && role !== roleRequired) {
    return <Navigate to="/" />;
  }

  return children;
};

const App = () => {
  const { role, loading } = useFetchUserRole();
  const loggedIn = isAuthenticated();

  if (loading) {
    return <div className="loading"><h1>Loading...</h1></div>;
  }

  return (
    <div className="app-container">
      {loggedIn ? <Navbar /> : <PublicNavbar />}

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verification" element={<OTPVerification />} />

          {/* Dashboard accessible only after login */}
          {loggedIn && (
            <>
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              {/* Engineer-only routes */}
              {role === "engineer" && (
                <>
                  <Route
                    path="/engineer-dashboard"
                    element={
                      <PrivateRoute roleRequired="engineer">
                        <EngineerDashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/job-cards"
                    element={
                      <PrivateRoute roleRequired="engineer">
                        <JobCardSummary />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/ppm-tasks"
                    element={
                      <PrivateRoute roleRequired="engineer">
                        <PPMTasks />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/daily-logs"
                    element={
                      <PrivateRoute roleRequired="engineer">
                        <DailyLogsOverview />
                      </PrivateRoute>
                    }
                  />
                </>
              )}

              {/* User-only routes */}
              {role === "user" && (
                <>
                  <Route
                    path="/user-dashboard"
                    element={
                      <PrivateRoute roleRequired="user">
                        <UserDashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/equipment"
                    element={
                      <PrivateRoute roleRequired="user">
                        <EquipmentOverview />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/fault-reporting"
                    element={
                      <PrivateRoute roleRequired="user">
                        <FaultReporting />
                      </PrivateRoute>
                    }
                  />
                </>
              )}
            </>
          )}

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
