import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicDashboard from './PublicDashboard';
import EngineerDashboard from './EngineerDashboard';
import UserDashboard from './UserDashboard';
import Login from './Login';
import { useAuth } from './auth'; // Assume this is a custom hook to handle auth

const AppRoutes = () => {
  const { user } = useAuth(); // Get the logged-in user

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PublicDashboard />} /> {/* Public view */}
      
      {/* Redirect to engineer or user dashboard based on role */}
      {user?.role === 'engineer' && (
        <Route path="/engineer-dashboard" element={<EngineerDashboard />} />
      )}
      {user?.role === 'user' && (
        <Route path="/user-dashboard" element={<UserDashboard />} />
      )}

      {/* Redirect any other paths */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;
