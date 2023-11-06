import { LOGIN, LOGOUT } from './types';
import { AuthState, AuthAction } from './props';

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('userID', payload.userID);
            localStorage.setItem('roles', JSON.stringify(payload.roles));
            return {
                ...state,
                token: payload.token,
                userID: payload.userID,
                roles: payload.roles,
            };
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('userID');
            localStorage.removeItem('roles');
            return {
                ...state,
                token: '',
                userID: '',
                roles: [],
            };
        default:
            return state;
    }
};

export default AuthReducer;
