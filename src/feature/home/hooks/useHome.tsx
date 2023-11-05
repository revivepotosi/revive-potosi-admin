import useAuth from '../../../hooks/useAuth';

const useHome = () => {
    const { logout: logoutUser } = useAuth();
    const logout = () => {
        logoutUser();
    }
    return { logout };
};

export default useHome;
