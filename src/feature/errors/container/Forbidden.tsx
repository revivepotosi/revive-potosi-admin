import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/named
import { ButtonProps } from 'primereact/button';
import ErrorContainer from '../../../components/ErrorContainer/ErrorContainer';
import CONSTANTS from '../utils/contanst';
import ROUTES from '../../../navigation/routes';
import useAuth from '../../../hooks/useAuth';

const Forbidden = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const buttons: ButtonProps[] = [
        {
            label: CONSTANTS.FORBIDDEN.BUTTON_HOME.LABEL,
            onClick: () => navigate(ROUTES.HOME),
            severity: 'help',
        },
        {
            label: CONSTANTS.FORBIDDEN.BUTTON_LOGIN.LABEL,
            onClick: () => {
                logout();
                navigate(ROUTES.HOME);
            },
            link: true,
            raised: true,
            severity: 'secondary',
        },
    ];
    return (
        <ErrorContainer
            title={CONSTANTS.FORBIDDEN.TITLE}
            subtitle={CONSTANTS.FORBIDDEN.SUBTITLE}
            buttons={buttons}
        />
    );
};

export default Forbidden;
