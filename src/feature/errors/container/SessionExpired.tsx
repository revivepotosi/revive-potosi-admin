/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line import/named
import { ButtonProps } from 'primereact/button';
import ErrorContainer from '../../../components/ErrorContainer/ErrorContainer';
import CONSTANTS from '../utils/contanst';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAppNavigation from '../../../navigation/useAppNavigation';

const SessionExpired = () => {
    const { logoutWithoutRedirect } = useAuth();
    const { goLogin } = useAppNavigation();
    useEffect(() => {
        logoutWithoutRedirect();
    }, []);

    const buttons: ButtonProps[] = [
        {
            label: CONSTANTS.SESSION_EXPIRED.BUTTON.LABEL,
            onClick: goLogin,
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
