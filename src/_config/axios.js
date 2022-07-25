const axios = require('axios');

const domaine = process.env.REACT_APP_API_BASE_URL;
const apiAxios = axios.create({
    baseURL: `${domaine}`,
    timeout: 1000,
});

export default apiAxios;