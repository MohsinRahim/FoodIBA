import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

export const signup = async (userData) => {
  const response = await API.post('/api/users', userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await API.post('/api/auth/login', credentials); // Adjust this endpoint according to your backend
  return response.data;
};


// New function to fetch user profile
export const fetchUserProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await API.get('/api/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export default {
  signup,
  login,
  fetchUserProfile
};