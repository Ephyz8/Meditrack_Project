import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/Auth';  // Utility function to handle login
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);

      // Store tokens and role in localStorage
      localStorage.setItem('authToken', response.access);
      localStorage.setItem('role', response.role);

      // Navigate based on user role
      switch (response.role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'engineer':
          navigate('/engineer-dashboard');
          break;
        case 'user':
          navigate('/user-dashboard');
          break;
        default:
          navigate('/');
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
