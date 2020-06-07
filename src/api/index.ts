import axios from 'axios';

const api = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
  timeout: 5000,
});

export default api;
