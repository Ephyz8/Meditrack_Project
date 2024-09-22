import axios from 'axios';

// Set up the base URL from an environment variable
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000'; // Default to localhost if not set

// Function to log in a user and store token & role
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${baseURL}/api/v1/auth/login/`, {
      email,
      password,
    });

    const { access, role } = response.data;

    // Store JWT token and user role in local storage
    localStorage.setItem('token', access);
    localStorage.setItem('role', role);

    return response.data;
  } catch (error) {
    // Return a more descriptive error message
    throw error.response ? error.response.data : 'Login failed';
  }
};

// Function to get the user role
export const getUserRole = () => {
  return localStorage.getItem('role');
};

// Function to check if the token is expired
const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
    const expiry = payload.exp * 1000; // Convert expiry to milliseconds
    return Date.now() > expiry;
  } catch (error) {
    return true; // Consider the token expired if decoding fails
  }
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  // Check if the token is expired
  if (isTokenExpired(token)) {
    logoutUser(); // Automatically log out if token is expired
    return false;
  }
  return true;
};

// Function to log out the user
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};
