import { useNavigate } from 'react-router-dom';
import useToast from './useToast';
import useAuth from './useAuth';

const useAuthError = () => {
    const { showToast } = useToast();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const getAuthError = (statusCode: number) => {
        console.log(statusCode);
        if (statusCode === 401) {
            showToast({
                severity: 'error',
                summary: 'No autorizado',
                detail: 'Sin Permisos',
            });
            logout();
            navigate('/login');
            return;
        }
        if (statusCode === 403) {
            showToast({
                severity: 'error',
                summary: 'No posee el Rol',
                detail: 'No posee el Rol',
            });
            navigate('/home');
            return;
        }
        showToast({
            severity: 'error',
            summary: 'Error de sistema',
            detail: 'Ha ocurrido un error, favor intentarlo más tarde.',
        });
    };
    return { getAuthError };
};

export default useAuthError;
