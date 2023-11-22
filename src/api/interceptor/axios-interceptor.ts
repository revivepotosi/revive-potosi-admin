/* eslint-disable import/named */
import axios, {
    AxiosError,
    AxiosInstance,
    AxiosResponse,
    HttpStatusCode,
    InternalAxiosRequestConfig,
} from 'axios';
import CONFIG from '../utils/config';
import ROUTES from '../../navigation/routes';
import globalRouter from '../../navigation/globalRouter';

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
        const status = error.response?.status;
        if (status === HttpStatusCode.Unauthorized && globalRouter) {
            globalRouter.navigate?.(ROUTES.SESSION_EXPIRED);
        }
        if (status === HttpStatusCode.Forbidden && globalRouter) {
            globalRouter.navigate?.(ROUTES.FORBIDDEN);
        }
        if (status === HttpStatusCode.InternalServerError && globalRouter) {
            globalRouter.navigate?.(ROUTES.GENERAL_ERROR);
        }
        return Promise.reject(error.response?.data);
    },
);

export default axiosInstance;
