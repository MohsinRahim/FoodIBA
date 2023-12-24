import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' }); // Replace with your backend URL

export const addToCart = async (menuItemId, quantity) => {
  const response = await API.post('/api/cart/add-to-cart', { menuItemId, quantity });
  return response.data;
};

export const fetchCart = async () => {
  const response = await API.get('/api/cart/get-cart');
  return response.data;
};

export const clearCart = async () => {
  const response = await API.post('/api/cart/clear-cart');
  return response.data;
};

export const removeFromCart = async (menuItemId) => {
  const response = await API.post('/api/cart/remove-from-cart', { menuItemId });
  return response.data;
};

// Add other necessary service functions as needed
