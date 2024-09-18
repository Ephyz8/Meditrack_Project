import axios from 'axios';

// You can set the base URL globally for Axios
axios.defaults.baseURL = 'http://localhost:8000/api/v1'; 

// Example API for login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('/auth/login/', {
      email,
      password,
    });

    // Example: Store the token if the login was successful
    if (response.data?.token) {
      localStorage.setItem('authToken', response.data.token);
    }

    return response.data; // Return the data (like token or user info)
  } catch (error) {
    // Enhanced error handling to avoid potential issues if error.response is undefined
    if (error.response) {
      throw error.response.data; // Server error (e.g., 400, 401)
    } else if (error.request) {
      throw new Error('Network error, please try again later.'); // No response from server
    } else {
      throw new Error('An unexpected error occurred.'); // Unexpected error
    }
  }
};
