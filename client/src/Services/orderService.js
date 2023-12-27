import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' }); //

export const createOrder = async (orderDetails) => {
    const token = localStorage.getItem('token');
    const headers = {
      'x-auth-token': `${token}`,
    };
    const response = await API.post('/api/orders', orderDetails , { headers } );
    return response;
};

export const getOrders = async () => {
    const token = localStorage.getItem('token');
    const headers = {
      'x-auth-token': `${token}`,
    };
    const response = await API.get('/api/orders/' + token, { headers } );
    return response;
};
  