import axios from 'axios';
// Axios Api instance creation
const axiosApiInstance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 3000,
  headers: {
    'x-api-key':
      'live_XC5kCskXJqoABTihQaFXxYSLqAecWmIUxAEZTeMAVVdHRG9nmzAusX7F2Ns1x3vH',
  },
});

export default axiosApiInstance;
