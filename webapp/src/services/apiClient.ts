import axios from 'axios';
import { storage } from '../common/utils/storage';

const { REACT_APP_API_ENDPOINT, API_TIME_OUT } = { REACT_APP_API_ENDPOINT: 'http://localhost:4044/api/v1', API_TIME_OUT: '' };

const ApiClient = axios.create({
  baseURL: REACT_APP_API_ENDPOINT,
  timeout: (API_TIME_OUT && parseInt(API_TIME_OUT, 10)) || 15000,
});

ApiClient.interceptors.request.use(
  (config: any) => {
    const authorizationData = storage.getToken();
    if (authorizationData) {
      config.headers.Authorization = `Bearer ${authorizationData}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

ApiClient.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

export default ApiClient;
