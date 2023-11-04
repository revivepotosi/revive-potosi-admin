import { createContext } from 'react';
import { AuthState } from './props';

const getToken = (): string => localStorage.getItem('token') ?? '';

const getUserID = (): string => localStorage.getItem('userID') ?? '';

export const initialState: AuthState = {
    token: getToken(),
    userID: getUserID(),
    login: (token: string, userID: string) => ({ token, userID }),
    logout: () => null,
};

const AuthContext = createContext(initialState);

export default AuthContext;
