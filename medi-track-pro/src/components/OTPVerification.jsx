import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './OTPVerification.module.css'; // Import your CSS module
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the email from localStorage or state management
    const storedEmail = localStorage.getItem('emailForOTP');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      // If email is not available, redirect to registration
      navigate('/register');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post('http://localhost:8000/api/v1/auth/verify-email/', {
        email,
        otp,
      });

      if (response.status === 200) {
        setMessage('Your email has been verified successfully!');
        setError(''); // Clear any error message
        // Clear the email from localStorage
        localStorage.removeItem('emailForOTP');
        // Redirect to login or dashboard after a delay
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid or expired OTP. Please try again.');
      setMessage(''); // Clear success message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleResendOTP = async () => {
    setLoading(true); // Start loading

    try {
      await axios.post('http://localhost:8000/api/v1/auth/resend-otp/', { email });
      setMessage('A new OTP has been sent to your email.');
      setError(''); // Clear any error message
    } catch (err) {
      setError('Failed to resend OTP. Please try again later.');
      setMessage(''); // Clear success message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className={styles.otpContainer}>
      <form className={styles.otpForm} onSubmit={handleSubmit}>
        <h2 className={styles.otpTitle}>Email Verification</h2>

        {message && <p className={styles.successText}>{message}</p>}
        {error && <p className={styles.errorText}>{error}</p>}

        {!loading ? (
          <>
            <p className={styles.instructions}>Please enter the OTP sent to your email.</p>

            <input
              type="text"
              placeholder="Enter OTP"
              className={styles.inputField}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            <button type="submit" className={styles.verifyButton}>Verify</button>

            <div className={styles.additionalLinks}>
              <button type="button" className={styles.linkButton} onClick={handleResendOTP}>
                Resend OTP
              </button>
            </div>
          </>
        ) : (
          <p className={styles.loadingText}>Processing...</p> // Loading indicator
        )}
      </form>
    </div>
  );
};

export default OTPVerification;
