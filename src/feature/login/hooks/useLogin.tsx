import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import useToast from '../../../hooks/useToast';
import axiosInstance from '../../../api/interceptor/axios-interceptor';
import { Login } from '../adapter/login';
import useAuth from '../../../hooks/useAuth';
import { LoginResponse } from '../interfaces/login-respose.interface';
// eslint-disable-next-line import/named
import { AxiosResponse } from 'axios';

const useLogin = () => {
    const { showToast } = useToast();
    const { login } = useAuth();
    const passwordRef = useRef<HTMLInputElement>(null);
    const [credential, setCredential] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const loginUser = () => {
        const loginDto = new Login(credential, password, rememberMe);
        axiosInstance
            .post('auth/login', loginDto.getLoginDto())
            .then((response: AxiosResponse<LoginResponse>) => {
                const data = response.data;
                login(data.token, data.user._id);
            })
            .catch((error) => {
                if (error.statusCode === 400) {
                    showToast({
                        severity: 'error',
                        summary: 'Error al iniciar sesión',
                        detail: error.message,
                    });
                    return;
                }
                showToast({
                    severity: 'error',
                    summary: 'Error al iniciar sesión',
                    detail: 'Ha ocurrido un error, favor intentarlo más tarde.',
                });
            });
    };
    const forgotPassword = () => {
        showToast({
            severity: 'info',
            summary: 'Contraseña Olvidada',
            detail: 'Favor contactar a su administrador.',
        });
    };
    const keyDownEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        passwordRef.current?.blur();
        loginUser();
    };
    const onChangeCredential = (event: ChangeEvent<HTMLInputElement>) => {
        setCredential(event.target.value);
    };
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const onChangeRememberMe = () => {
        setRememberMe((rememberMe) => !rememberMe);
    };
    return {
        credential,
        password,
        rememberMe,
        passwordRef,
        loginUser,
        forgotPassword,
        keyDownEnter,
        onChangeCredential,
        onChangePassword,
        onChangeRememberMe,
    };
};

export default useLogin;
