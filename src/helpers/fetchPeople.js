import axios from 'axios';

// to fetch all people by pages
export const getPeopleData = async (url, page = '') => {
  const pageUrl = page ? `?page=${page}` : '';
  const response = await axios.get(`${url}${pageUrl}`);
  
  return response.data;
}