// eslint-disable-next-line import/named
import { ButtonProps } from 'primereact/button';
import ErrorContainer from '../../../components/ErrorContainer/ErrorContainer';
import useAppNavigation from '../../../navigation/useAppNavigation';
import CONSTANTS from '../utils/contanst';

const GeneralError = () => {
    const { goHome } = useAppNavigation();
    const buttons: ButtonProps[] = [
        {
            label: CONSTANTS.GENERAL_ERROR.BUTTON.LABEL,
            onClick: goHome,
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
