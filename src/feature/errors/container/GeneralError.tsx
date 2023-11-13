import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/named
import { ButtonProps } from 'primereact/button';
import ErrorContainer from '../../../components/ErrorContainer/ErrorContainer';
import CONSTANTS from '../utils/contanst';
import ROUTES from '../../../navigation/routes';

const GeneralError = () => {
    const navigate = useNavigate();
    const buttons: ButtonProps[] = [
        {
            label: CONSTANTS.GENERAL_ERROR.BUTTON.LABEL,
            onClick: () => navigate(ROUTES.HOME),
            severity: 'help',
        },
    ];
    return (
        <ErrorContainer
            title={CONSTANTS.GENERAL_ERROR.TITLE}
            subtitle={CONSTANTS.GENERAL_ERROR.SUBTITLE}
            buttons={buttons}
        />
    );
};

export default GeneralError;
