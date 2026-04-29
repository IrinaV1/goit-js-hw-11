import axios from 'axios';

const API_KEY = '55630526-f44120b4f4ecc6b1cd7cfb12b';
const BASE_URL = 'https://pixabay.com/api/';
export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query.trim(),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data.hits;
      console.log(response.data.hits);
    })
    .catch(error => {
      console.log('Error fetching images:');
    });
}
