import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/Auth';  // Import the loginUser utility function
import styles from './LoginForm.module.css';  // Use your existing CSS

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use the loginUser function from Auth.js
      const response = await loginUser(email, password);

      // Store tokens (access and refresh) and role in localStorage
      localStorage.setItem('authToken', response.access);  // Store JWT token
      localStorage.setItem('role', response.role);  // Store user role

      // Navigate to different dashboards based on role
      if (response.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message || 'Invalid credentials. Please try again.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.loginTitle}>Login</h2>

        {error && <p className={styles.errorText}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className={styles.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.loginButton}>Login</button>

        <div className={styles.additionalLinks}>
          <a href="/register" className={styles.link}>Register</a>
          <a href="/forgot-password" className={styles.link}>Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
