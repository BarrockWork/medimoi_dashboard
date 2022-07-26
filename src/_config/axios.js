import jwtHandler from "./jwtHandler";

const axios = require('axios');
const domaine = process.env.REACT_APP_API_BASE_URL;

const apiAxios = axios.create({
    baseURL: `${domaine}`,
    timeout: 1000,
    headers: {
        // Authorization : `Bearer ${token}`
        Authorization : `Bearer ${jwtHandler.getToken()}`
    }
});

export default apiAxios;