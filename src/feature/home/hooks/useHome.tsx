import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import useUserService from '../../users/hooks/useUserService';

const useHome = () => {
    const { logout } = useAuth();
    const { getUser } = useUserService();
    const logoutUser = () => {
        logout();
    };
    useEffect(() => {
        getUser();
    }, []);
    return { logoutUser };
};

export default useHome;
