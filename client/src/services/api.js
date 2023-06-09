import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3001', // Replace with the correct server URL and port
  });


  export default api;
