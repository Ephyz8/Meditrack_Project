import axios from 'axios';

// Set global Axios defaults for the base API URL and headers
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1'; // Base URL from environment or default to localhost
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Helper function for user login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('/auth/login/', { email, password });

    // If login is successful, store token and user information
    const { token, user } = response.data || {};

    if (token) {
      localStorage.setItem('authToken', token); // Save token to local storage
    }

    // Return token and user info, if available
    return { token, user };
  } catch (error) {
    // Enhanced error handling to provide specific feedback
    if (error.response) {
      const { status, data } = error.response;

      // Handle 401 Unauthorized error for incorrect credentials
      if (status === 401) {
        throw new Error(data?.detail || 'Invalid credentials. Please try again.');
      }

      // Handle any other server-side errors
      throw new Error(data?.message || 'Login failed. Please check your credentials.');
    } else if (error.request) {
      // Handle network-related errors
      throw new Error('Network error. Please check your connection and try again.');
    } else {
      // Handle unexpected errors
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  }
};
q