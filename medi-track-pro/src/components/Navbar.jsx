// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import CSS module
import { isAuthenticated, getUserRole, logoutUser } from '../utils/Auth'; // Import Auth utility functions

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get user role and check if user is authenticated
  const isLoggedIn = isAuthenticated();
  const role = getUserRole();

  const handleLogout = () => {
    // Call logout function and redirect to home page
    logoutUser();
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src="/assets/logo.png" alt="MediTrack Pro Logo" className={styles.logo} />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link 
            to="/dashboard" 
            className={location.pathname === '/dashboard' ? styles.active : ''}
          >
            Dashboard
          </Link>
        </li>
        {isLoggedIn && role === 'Medical Equipment User' && (
          <li>
            <Link 
              to="/fault-reporting" 
              className={location.pathname === '/fault-reporting' ? styles.active : ''}
            >
              Fault Reporting
            </Link>
          </li>
        )}
        {isLoggedIn && role === 'engineer' && (
          <>
            <li>
              <Link 
                to="/job-cards" 
                className={location.pathname === '/job-cards' ? styles.active : ''}
              >
                Job Cards
              </Link>
            </li>
            <li>
              <Link 
                to="/ppm-tasks" 
                className={location.pathname === '/ppm-tasks' ? styles.active : ''}
              >
                PPM Tasks
              </Link>
            </li>
            <li>
              <Link 
                to="/daily-logs" 
                className={location.pathname === '/daily-logs' ? styles.active : ''}
              >
                Daily Logs
              </Link>
            </li>
          </>
        )}
      </ul>
      <div className={styles.authLinks}>
        {isLoggedIn ? (
          <button onClick={handleLogout} className={styles.authLink}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className={styles.authLink}>
              Login
            </Link>
            <Link to="/register" className={styles.authLink}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
