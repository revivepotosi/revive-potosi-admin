import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/named
import { ButtonProps } from 'primereact/button';
import ErrorContainer from '../../../components/ErrorContainer/ErrorContainer';
import CONSTANTS from '../utils/contanst';
import ROUTES from '../../../navigation/routes';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const SessionExpired = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, []);

    const buttons: ButtonProps[] = [
        {
            label: CONSTANTS.SESSION_EXPIRED.BUTTON.LABEL,
            onClick: () => navigate(ROUTES.LOGIN),
            severity: 'help',
        },
    ];

    return (
        <ErrorContainer
            title={CONSTANTS.SESSION_EXPIRED.TITLE}
            subtitle={CONSTANTS.SESSION_EXPIRED.SUBTITLE}
            buttons={buttons}
        />
    );
};

export default SessionExpired;
