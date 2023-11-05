// eslint-disable-next-line import/named
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import CONFIG from '../utils/config';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: CONFIG.baseURL,
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        return Promise.reject(error.response?.data);
    },
);

export default axiosInstance;
