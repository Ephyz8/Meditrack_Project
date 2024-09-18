import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OTPVerification from './components/OTPVerification'; // Import the OTPVerification component
import Register from './components/Register'; 
import Login from './components/Login'; 
import Dashboard from './components/Dashboard'; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Redirect any unknown routes to the login page */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
