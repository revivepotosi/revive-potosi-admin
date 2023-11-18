/* eslint-disable no-unused-vars */

import { Session } from '../../interfaces/session.interface';

interface AuthState {
    session: Session;
    login: (session: Session) => void;
    logout: () => void;
    logoutWithoutRedirect: () => void;
}

interface AuthAction {
    type: string;
    payload: AuthState;
}

interface AuthProviderProps {
    children: JSX.Element;
}

export { type AuthState, type AuthAction, type AuthProviderProps };
