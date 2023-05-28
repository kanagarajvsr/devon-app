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


// Create Function to handle requests from the backend
   const  callToBackend = async (shortUrl, method,data={}) => {
    console.log(shortUrl, method,data)
        const options = {
            url: shortUrl,
            method: method,
            ...data,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
          };

        const response = await instance(options);
        return response;
    }
 
export default callToBackend;