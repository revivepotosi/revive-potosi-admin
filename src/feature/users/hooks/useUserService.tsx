import { useState } from 'react';
// eslint-disable-next-line import/named
import { AxiosResponse } from 'axios';
import axiosInstance from '../../../api/interceptor/axios-interceptor';
import useAuth from '../../../hooks/useAuth';
import { User } from '../../../interfaces/user.interface';
import useToast from '../../../hooks/useToast';

const useUserService = () => {
    const {
        session: { token },
    } = useAuth();
    const { showToast } = useToast();
    const [users, setUsers] = useState<User[]>([]);
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
                showToast({
                    severity: 'error',
                    summary: 'Algo ha ocurrido',
                    detail: error.message,
                });
            });
    };
    return { users, getUser };
};

export default useUserService;
