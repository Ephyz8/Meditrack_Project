// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './RegisterForm.module.css';  

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Medical Equipment User'); // Default role selection
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8000/api/v1/auth/register/', {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password2: confirmPassword, 
        role, // Pass role to the backend
      });
      
      if (response.status === 201) {
        alert('OTP has been sent to your email. Please verify.');
        localStorage.setItem('emailForOTP', email); // Store email for OTP verification
        navigate('/otp-verification'); // Redirect to OTP verification page
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setFieldErrors(err.response.data);  // Capture field-specific errors from the backend
      } else {
        setError('Failed to register. Please try again.');
      }
    }
  };  

  // Helper function to display error messages
  const renderErrorMessages = (errorObj) => {
    return Object.keys(errorObj).map((field) => (
      <p key={field} className={styles.errorText}>{`${field}: ${errorObj[field].join(', ')}`}</p>
    ));
  };

  return (
    <div className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2 className={styles.registerTitle}>Register</h2>

        {error && <p className={styles.errorText}>{error}</p>}
        {Object.keys(fieldErrors).length > 0 && renderErrorMessages(fieldErrors)}

        <input
          type="text"
          placeholder="First Name"
          className={styles.inputField}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className={styles.inputField}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className={styles.inputField}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Role selection dropdown */}
        <select 
          className={styles.inputField} 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          required
        >
          <option value="Medical Equipment User">Medical Equipment User</option>
          <option value="engineer">Engineer</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" className={styles.registerButton}>Register</button>

        <div className={styles.additionalLinks}>
          <a href="/login" className={styles.link}>Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
