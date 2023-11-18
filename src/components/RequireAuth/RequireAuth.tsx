import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Props } from './types';
import ROUTES from '../../navigation/routes';

const RequireAuth = ({ children }: Props) => {
    const {
        session: { token },
    } = useAuth();
    const location = useLocation();
    if (!token) {
        return (
            <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
        );
    }
    return children;
};

export default RequireAuth;
