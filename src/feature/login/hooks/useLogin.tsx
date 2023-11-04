import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import useToast from '../../../hooks/useToast';

const useLogin = () => {
    const { showToast } = useToast();
    const passwordRef = useRef<HTMLInputElement>(null);
    const [credential, setCredential] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const login = () => {
        showToast({ severity: 'info', summary: 'Info', detail: 'login' });
    };
    const forgotPassword = () => {
        showToast({ severity: 'info', summary: 'Info', detail: 'forgotPassword' });
    };
    const keyDownEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        passwordRef.current?.blur();
        login();
    }
    const onChangeCredential = (event: ChangeEvent<HTMLInputElement>) => {
        setCredential(event.target.value);
    }
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const onChangeRememberMe = () => {
        setRememberMe((rememberMe) => !rememberMe)
    }
    return {
        credential,
        password,
        rememberMe,
        passwordRef,
        login,
        forgotPassword,
        keyDownEnter,
        onChangeCredential,
        onChangePassword,
        onChangeRememberMe,
    }
};

export default useLogin;
