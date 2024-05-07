import Config from '../config';
import axios from 'axios';

const httpInstance = axios.create({
    baseURL: Config.API_URL,
});

httpInstance.interceptors.request.use(
    async (config) => {
        const newConfig = { ...config };
        return newConfig;
    }
);

httpInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default httpInstance;
