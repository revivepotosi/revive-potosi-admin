import { LOGIN, LOGOUT } from './types';
import { AuthState, AuthAction } from './props';

const AuthReducer = (state: AuthState, action: AuthAction) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('userID', payload.userID);
            return {
                ...state,
                token: payload.token,
                userID: payload.userID,
            };
        case LOGOUT:
            localStorage.setItem('token', '');
            localStorage.setItem('userID', '');
            return {
                ...state,
                token: payload.token,
                userID: payload.userID,
            };
        default:
            return state;
    }
};

export default AuthReducer;
