import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Image } from 'primereact/image';
// eslint-disable-next-line import/named
import { Password, PasswordPassThroughOptions } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';
import logoWhiteText from '../../../assets/images/logo-white-text.png';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const {
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
    } = useLogin();

    const passwordStyle: PasswordPassThroughOptions = {
        root: {
            className: classNames('flex flex-col'),
        },
    };
    return (
        <main className="bg-login bg-center bg-no-repeat bg-cover min-h-screen flex justify-center items-center">
            <div className="w-80 md:w-96 px-6 bg-gradient-to-tl from-blue-950 to-sky-900 rounded-lg mt-6 md:mt-0 mb-6 md:mb-0">
                <div className="flex w-full justify-center pt-6">
                    <Image
                        src={logoWhiteText}
                        alt="Logo RevivePotosi"
                        width="160"
                    />
                </div>
                <h1 className="text-white text-xl font-medium tracking-wide text-center pt-4 pb-6">
                    Ingreso de usuario
                </h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="username"
                            className="text-white text-md"
                        >
                            Nombre de usuario o correo electrónico
                        </label>
                        <InputText
                            id="username"
                            value={credential}
                            onChange={onChangeCredential}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-white text-md"
                        >
                            Contraseña
                        </label>
                        <Password
                            inputId="password"
                            inputRef={passwordRef}
                            pt={passwordStyle}
                            value={password}
                            onChange={onChangePassword}
                            onKeyDown={keyDownEnter}
                        />
                    </div>
                    <div>
                        <Checkbox
                            inputId="rememberMe"
                            name="rememberMe"
                            value="rememberMe"
                            checked={rememberMe}
                            onChange={onChangeRememberMe}
                        />
                        <label
                            htmlFor="rememberMe"
                            className="pl-2 text-white text-md"
                        >
                            Recordarme
                        </label>
                    </div>
                </div>
                <div className="flex justify-end pt-6">
                    <Button
                        label="¿Olvidaste tu contraseña?"
                        severity="secondary"
                        link
                        size="small"
                        onClick={forgotPassword}
                    />
                </div>
                <div className="flex flex-col pb-6 pt-4">
                    <Button label="Ingresar" onClick={loginUser} />
                </div>
            </div>
        </main>
    );
};

export default Login;
