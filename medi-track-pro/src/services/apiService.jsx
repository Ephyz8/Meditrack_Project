import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1'; 

// Example API for login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login/`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
