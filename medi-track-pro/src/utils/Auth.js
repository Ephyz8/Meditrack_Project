import axios from 'axios';

// Function to log in a user and store token & role
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:8000/api/v1/auth/login/', {
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
    throw error.response ? error.response.data : "Login failed";
  }
};

// Function to check if the token is valid or expired
const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
    const expiry = payload.exp * 1000; // Convert expiry to milliseconds
    return Date.now() > expiry;
  } catch (error) {
    return true; // If there's an error decoding, consider the token expired
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

// Function to get user role
export const getUserRole = () => {
  return localStorage.getItem('role');
};

// Function to log out the user
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};

// Function to get the authorization header with token
export const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};
