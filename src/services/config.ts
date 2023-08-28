import axios from "axios"

const Axios = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});


Axios.interceptors.request.use(function (config) {
    // Haz algo antes que la petición se ha enviada
    return config;
  }, function (error) {
    // Haz algo con el error de la petición
    return Promise.reject(error);
});


Axios.interceptors.response.use(function (response) {
    // Cualquier código de estado que este dentro del rango de 2xx causa la ejecución de esta función 
    // Haz algo con los datos de la respuesta
    return response;
  }, function (error) {
    // Cualquier código de estado que este fuera del rango de 2xx causa la ejecución de esta función
    // Haz algo con el error
    return Promise.reject(error);
});

export default Axios

