import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 2000,
});

//Request header
instance.interceptors.request.use(function (config) {
    return config;
});

//Response data 
instance.interceptors.response.use((response) => {
    return response;
});
export default instance;