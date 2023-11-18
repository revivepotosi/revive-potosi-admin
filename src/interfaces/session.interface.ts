import { Role } from './role.interface';

export interface Session {
    token: string;
    userID: string;
    roles: Role[];
    fullName: string;
}
