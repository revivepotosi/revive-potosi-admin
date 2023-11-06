import { useState } from 'react';
// eslint-disable-next-line import/named
import { AxiosResponse } from 'axios';
import axiosInstance from '../../../api/interceptor/axios-interceptor';
import useAuth from '../../../hooks/useAuth';
import useAuthError from '../../../hooks/useAuthError';
import { User } from '../../../interfaces/user.interface';

const useUserService = () => {
    const { token } = useAuth();
    const [users, setUsers] = useState<User[]>([]);
    const { getAuthError } = useAuthError();
    const getUser = () => {
        axiosInstance
            .get('user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response: AxiosResponse<User[]>) => {
                const data = response.data;
                setUsers(data);
            })
            .catch((error) => {
                getAuthError(error.statusCode);
            });
    };
    return { users, getUser };
};

export default useUserService;
