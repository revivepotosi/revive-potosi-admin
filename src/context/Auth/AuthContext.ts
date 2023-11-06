import { createContext } from 'react';
import { AuthState } from './props';
import { Role } from '../../interfaces/role.interface';

const getToken = (): string => localStorage.getItem('token') ?? '';

const getUserID = (): string => localStorage.getItem('userID') ?? '';

const getRoles = (): Role[] =>
    JSON.parse(localStorage.getItem('roles') ?? '[]');

export const initialState: AuthState = {
    token: getToken(),
    userID: getUserID(),
    roles: getRoles(),
    login: (token: string, userID: string, roles: Role[]) => ({
        token,
        userID,
        roles,
    }),
    logout: () => null,
};

const AuthContext = createContext(initialState);

export default AuthContext;
