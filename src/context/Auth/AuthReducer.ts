import { LOGIN, LOGOUT } from './types';
import { AuthState, AuthAction } from './props';

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN:
            localStorage.setItem('token', payload.session.token);
            localStorage.setItem('userID', payload.session.userID);
            localStorage.setItem(
                'roles',
                JSON.stringify(payload.session.roles),
            );
            localStorage.setItem('fullName', payload.session.fullName);
            return {
                ...state,
                session: payload.session,
            };
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('userID');
            localStorage.removeItem('roles');
            localStorage.removeItem('fullName');
            return {
                ...state,
                session: {
                    token: '',
                    userID: '',
                    roles: [],
                    fullName: '',
                },
            };
        default:
            return state;
    }
};

export default AuthReducer;
