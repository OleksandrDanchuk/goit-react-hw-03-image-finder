import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35857249-0d707f1bd6e70bbb52b237dd3';

export const RequestServer = async (query, page) => {
  const searchParams = new URLSearchParams({
    page: page,
    q: query,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  return response.data;
};
