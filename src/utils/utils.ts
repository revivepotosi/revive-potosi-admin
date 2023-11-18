const isEmail = (text: string): boolean => {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(text);
};

const getFullName = (name: string, lastname: string): string =>
    `${name} ${lastname}`;

const getAvatarLetter = (fullName: string) => fullName[0];

export { isEmail, getFullName, getAvatarLetter };
