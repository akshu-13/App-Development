import axios from 'axios';

const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;
const BASE_URL = 'http://127.0.0.1:8000/user';

const signinService = async (email,password) => {
  try {
    const response = await axios.post(`${BASE_URL}/signin`,{email,password});
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};



