import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: 'http://swagger-demo.s3-website-ap-southeast-1.amazonaws.com/UseAngular/ReactJS/VueJS',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (401 === error.response.status) {
      localStorage.removeItem('access_token');
      window.location = '/login';
    } else {
      throw error;
    }
  },
);

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
