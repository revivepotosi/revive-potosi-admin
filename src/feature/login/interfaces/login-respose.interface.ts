import { User } from '../../../interfaces/user.interface';

export interface LoginResponse {
    user: User;
    token: string;
}