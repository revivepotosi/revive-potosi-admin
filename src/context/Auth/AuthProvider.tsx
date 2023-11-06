import { useReducer } from 'react';
import AuthContext, { initialState } from './AuthContext';
import AuthReducer from './AuthReducer';
import { LOGIN, LOGOUT } from './types';
import { AuthProviderProps } from './props';
import { useNavigate } from 'react-router-dom';

const AuthProvider = (props: AuthProviderProps) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const navigate = useNavigate();
    const { children } = props;

    const login = (token: string, userID: string) => {
        try {
            dispatch({
                type: LOGIN,
                payload: { ...initialState, token, userID },
            });
            navigate('/home');
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        try {
            dispatch({ type: LOGOUT, payload: { ...initialState } });
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    const value = {
        ...state,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
