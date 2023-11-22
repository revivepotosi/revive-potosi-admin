import { Role } from '../interfaces/role.interface';

const isEmail = (text: string): boolean => {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(text);
};

const getFullName = (name: string, lastname: string): string =>
    `${name} ${lastname}`;

const getAvatarLetter = (fullName: string) => fullName[0];

const hasRole = (userRoles: Role[], validRoles: string[]) => {
    for (const role of userRoles) {
        if (validRoles.includes(role.name)) {
            return true;
        }
    }
    return false;
};

export { isEmail, getFullName, getAvatarLetter, hasRole };
