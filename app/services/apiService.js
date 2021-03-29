import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://6045d82ef0c6dc00177b0d4e.mockapi.io/api',
  headers: {Accept: 'application/json'},
});

function httpRequest(method, url, request) {
  return axiosInstance[method](url, request)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error));
}

export default {
  get(url, request) {
    return httpRequest('get', url, request);
  },

  delete(url, request) {
    return httpRequest('delete', url, request);
  },

  post(url, request) {
    return httpRequest('post', url, request);
  },

  put(url, request) {
    return httpRequest('put', url, request);
  },

  patch(url, request) {
    return httpRequest('patch', url, request);
  },
};
