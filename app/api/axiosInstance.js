import axios from 'axios';
import apiRoutes from './apiRoutes';

const axiosInstance = axios.create({
  baseURL: apiRoutes.base,
  headers: {
    'Content-Type': 'application/json',
  },
});
const {CancelToken} = axios;
const requestMap = new Map();

axiosInstance.interceptors.request.use(
  config => {
    const source = CancelToken.source();
    config.cancelToken = source.token;
    requestMap.set(config.url, source);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add a response interceptor to handle errors
axiosInstance.interceptors.response.use(
  response => {
    requestMap.delete(response.config.url);
    return response;
  },
  async error => {
    if (axios.isCancel(error)) {
      throw new axios.Cancel('Request cancelled');
    }

    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      // Refresh token logic goes here
      const refreshedToken = await api.auth.refreshToken();
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${refreshedToken}`;

      return axiosInstance(originalRequest);
    }

    throw error;
  },
);

// Export a function to cancel all pending requests
export const cancelPendingRequests = () => {
  requestMap.forEach(source => {
    source.cancel('Request cancelled due to component unmounted');
  });
  requestMap.clear();
};

export default axiosInstance;
