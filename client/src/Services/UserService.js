import axios from 'axios';

const API_URL = "http://localhost:3000";  // Replace with your API URL

class UserService {
  async register(userData) {
    return axios.post(`${API_URL}/register`, userData);
  }

  async login(credentials) {
    const response = await axios.post(`${API_URL}/login`, credentials);
    console.log("Axios response:", response);

    // Check for custom status 'ok'
    if (response.data.status === 'ok') {
        return response.data; 
    } else {
        throw new Error(response.data.message || "Server returned an unexpected status.");
    }
}

async getProfile(userId) {
  const token = localStorage.getItem('token');
  const config = { headers: { Authorization: `Bearer ${token}` } };

  // Construct the URL using the userId parameter
  const url = userId ? `${API_URL}/profile/${userId}` : `${API_URL}/profile`;
  console.log(`Request URL: ${url}`);

  return axios.get(url, config);
}

  async updateProfile(userData, token) {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    return axios.put(`${API_URL}/updateProfile`, userData, config);
  }

  async deleteAccount(token) {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    return axios.delete(`${API_URL}/deleteAccount`, config);
  }
}



export default new UserService();
