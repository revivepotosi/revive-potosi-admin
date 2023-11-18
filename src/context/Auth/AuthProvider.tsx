import { useReducer } from 'react';
import AuthContext, { initialState } from './AuthContext';
import AuthReducer from './AuthReducer';
import { LOGIN, LOGOUT } from './types';
import { AuthProviderProps, AuthState } from './props';
import useAppNavigation from '../../navigation/useAppNavigation';
import { Session } from '../../interfaces/session.interface';

const AuthProvider = (props: AuthProviderProps) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const { goHome, goLogin } = useAppNavigation();
    const { children } = props;

    const login = (session: Session) => {
        try {
            dispatch({
                type: LOGIN,
                payload: { ...initialState, session },
            });
            goHome();
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        try {
            dispatch({ type: LOGOUT, payload: { ...initialState } });
            goLogin();
        } catch (error) {
            console.error(error);
        }
    };

    const logoutWithoutRedirect = () => {
        try {
            dispatch({ type: LOGOUT, payload: { ...initialState } });
        } catch (error) {
            console.error(error);
        }
    };

    const value: AuthState = {
        ...state,
        login,
        logout,
        logoutWithoutRedirect,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
