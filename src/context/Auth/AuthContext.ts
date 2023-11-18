import { createContext } from 'react';
import { AuthState } from './props';
import { Role } from '../../interfaces/role.interface';
import { Session } from '../../interfaces/session.interface';

const getToken = (): string => localStorage.getItem('token') ?? '';

const getUserID = (): string => localStorage.getItem('userID') ?? '';

const getFullName = (): string => localStorage.getItem('fullName') ?? '';

const getRoles = (): Role[] =>
    JSON.parse(localStorage.getItem('roles') ?? '[]');

export const initialState: AuthState = {
    session: {
        token: getToken(),
        userID: getUserID(),
        roles: getRoles(),
        fullName: getFullName(),
    },
    login: (session: Session) => session,
    logout: () => null,
    logoutWithoutRedirect: () => null,
};

const AuthContext = createContext(initialState);

export default AuthContext;
