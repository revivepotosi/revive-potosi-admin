import { useNavigate } from 'react-router-dom';
import ROUTES from './routes';

const useAppNavigation = () => {
    const navigation = useNavigate();
    const goHome = () => navigation(ROUTES.HOME);
    const goLogin = () => navigation(ROUTES.LOGIN);
    return { goHome, goLogin };
};

export default useAppNavigation;
