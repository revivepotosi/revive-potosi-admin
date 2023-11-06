/* eslint-disable no-unused-vars */

import { Role } from '../../interfaces/role.interface';

interface AuthState {
    token: string;
    userID: string;
    roles: Role[];
    login: (token: string, userID: string, roles: Role[]) => void;
    logout: () => void;
}

interface AuthAction {
    type: string;
    payload: AuthState;
}

interface AuthProviderProps {
    children: JSX.Element;
}

export { type AuthState, type AuthAction, type AuthProviderProps };
