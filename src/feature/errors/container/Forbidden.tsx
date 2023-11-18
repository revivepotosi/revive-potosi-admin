// eslint-disable-next-line import/named
import { ButtonProps } from 'primereact/button';
import ErrorContainer from '../../../components/ErrorContainer/ErrorContainer';
import CONSTANTS from '../utils/contanst';
import useAuth from '../../../hooks/useAuth';
import useAppNavigation from '../../../navigation/useAppNavigation';

const Forbidden = () => {
    const { goHome } = useAppNavigation();
    const { logout } = useAuth();

    const buttons: ButtonProps[] = [
        {
            label: CONSTANTS.FORBIDDEN.BUTTON_HOME.LABEL,
            onClick: goHome,
            severity: 'help',
        },
        {
            label: CONSTANTS.FORBIDDEN.BUTTON_LOGIN.LABEL,
            onClick: () => logout(),
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
