import { isEmail } from '../../../utils/utils';

export class Login {
    private username?: string;
    private email?: string;
    private password: string;
    private rememberMe: boolean;

    constructor(credential: string, password: string, rememberMe: boolean) {
        if (isEmail(credential)) {
            this.email = credential;
        } else {
            this.username = credential;
        }
        this.password = password;
        this.rememberMe = rememberMe;
    }

    getLoginDto() {
        const login = {
            password: this.password,
            rememberMe: this.rememberMe,
        };
        if (this.username) {
            return {
                ...login,
                username: this.username,
            };
        } else {
            return {
                ...login,
                email: this.email,
            };
        }
    }
}
