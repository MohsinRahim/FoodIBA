import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' }); // Replace with your backend URL

export const fetchRestaurantById = async (restaurantId) => {
  try {
      const response = await API.get(`/api/restaurants/${restaurantId}`);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const fetchRestaurants = async () => {
  try {
    const response = await API.get('/api/restaurants');
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }

  
};