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
