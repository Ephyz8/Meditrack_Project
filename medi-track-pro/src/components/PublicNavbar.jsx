import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import CSS module

const PublicNavbar = () => {
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
            to="/about" 
            className={location.pathname === '/about' ? styles.active : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? styles.active : ''}
          >
            Contact
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

export default PublicNavbar;
