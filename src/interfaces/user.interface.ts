import { Role } from './role.interface';

export interface User {
    _id: string;
    username: string;
    email: string;
    name: string;
    lastname: string;
    password?: string;
    roles: Role[];
    isActive: boolean;
}

export const defaultUser: User = {
    _id: '',
    username: '',
    email: '',
    name: '',
    lastname: '',
    roles: [],
    isActive: true,
};
