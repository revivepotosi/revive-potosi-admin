import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Props } from './types';

const NoRequireAuth = ({ children }: Props) => {
    const { token } = useAuth();
    const location = useLocation();
    if (token) {
        return <Navigate to="/home" state={{ from: location }} replace />;
    }
    return children;
};

export default NoRequireAuth;
