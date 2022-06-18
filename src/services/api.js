import axios from 'axios'

const httpClient = axios.create ({
    baseURL: `https://localhost:5001/`,
    responseType: 'json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
});

export default httpClient;