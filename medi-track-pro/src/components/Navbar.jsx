// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import CSS module

const Navbar = () => {
  const location = useLocation();

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
            to="/" 
            className={location.pathname === '/' ? styles.active : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/dashboard" 
            className={location.pathname === '/dashboard' ? styles.active : ''}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link 
            to="/equipment" 
            className={location.pathname === '/equipment' ? styles.active : ''}
          >
            Equipment
          </Link>
        </li>
        <li>
          <Link 
            to="/fault-reporting" 
            className={location.pathname === '/fault-reporting' ? styles.active : ''}
          >
            Fault Reporting
          </Link>
        </li>
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
      </ul>
      <div className={styles.authLinks}>
        <Link to="/login" className={styles.authLink}>Login</Link>
        <Link to="/register" className={styles.authLink}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
