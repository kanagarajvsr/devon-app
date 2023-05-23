import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001', //base URL for server
    timeout: 2000,
});

//Request header
instance.interceptors.request.use(function (config) {
        // This use to validate the resquest authentication and authorization
    return config;
});

//Response data 
instance.interceptors.response.use((response) => {
    // This use to handle the response error like 4xx
    return response;
});
export default instance;