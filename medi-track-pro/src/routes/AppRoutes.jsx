import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OTPVerification from './components/OTPVerification';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EngineerDashboard from './components/EngineerDashboard'; // Engineer dashboard
import UserDashboard from './components/UserDashboard'; // User dashboard
import axios from 'axios'; // To manage user role

const AppRoutes = () => {
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Fetch the authenticated user's role from the backend or localStorage
    const fetchUserRole = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/auth/user-role/');
        if (response.data && response.data.role) {
          setRole(response.data.role);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error fetching user role', error);
        setIsAuthenticated(false);
      }
    };

    fetchUserRole();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Public dashboard */}

        {/* Engineer-specific routes */}
        {role === 'engineer' && isAuthenticated && (
          <>
            <Route path="/engineer-dashboard" element={<EngineerDashboard />} />
          </>
        )}

        {/* User-specific routes */}
        {role === 'user' && isAuthenticated && (
          <>
            <Route path="/user-dashboard" element={<UserDashboard />} />
          </>
        )}

        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
