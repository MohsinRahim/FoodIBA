import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' }); // Replace with your backend URL

export const fetchMenuItemsByRestaurant = async (restaurantId) => {
  try {
    const response = await API.get(`/api/menuItems/by-restaurant/${restaurantId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
