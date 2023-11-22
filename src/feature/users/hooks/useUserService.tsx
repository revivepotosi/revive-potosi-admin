// eslint-disable-next-line import/named
import { AxiosResponse } from 'axios';
import axiosInstance from '../../../api/interceptor/axios-interceptor';
import useAuth from '../../../hooks/useAuth';
import { User } from '../../../interfaces/user.interface';

const useUserService = () => {
    const {
        session: { token },
    } = useAuth();

    const getUser = async () => {
        try {
            const response: AxiosResponse<User[]> = await axiosInstance.get(
                'user',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            const users: User[] = response.data;
            return users;
        } catch (error: any) {
            throw new Error(error.message);
        }
    };
    return { getUser };
};

export default useUserService;
