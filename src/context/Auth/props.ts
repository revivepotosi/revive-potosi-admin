/* eslint-disable no-unused-vars */

interface AuthState {
    token: string;
    userID: string;
    login: (token: string, userID: string) => void;
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
