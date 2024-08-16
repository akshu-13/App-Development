import axios from 'axios';

const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;
const BASE_URL = 'https://api.geoapify.com/v2/places';

const fetchTourismPlaces = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?categories=tourism&filter=place:513d9cdc4d184553405952a1bab9f89f2540f00101f901b5c21b0000000000c00209&limit=20&apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

export default fetchTourismPlaces;
