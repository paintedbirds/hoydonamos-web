import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { accept: 'application/json' },
  params: {},
});

export default httpClient;
