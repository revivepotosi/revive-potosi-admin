import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Image } from 'primereact/image';
import { Password, PasswordPassThroughOptions } from 'primereact/password';
import { classNames } from 'primereact/utils';
import logoWhiteText from '../../../assets/images/logo-white-text.png';

const Login = () => {
    const passwordStyle: PasswordPassThroughOptions={
        root: {
            className: classNames('flex flex-col'),
        },
    };
    return (
        <main className="bg-login bg-center bg-no-repeat bg-cover h-screen flex justify-center items-center">
            <div className="w-80 md:w-96 px-6 bg-gradient-to-tl from-blue-950 to-sky-900 rounded-lg">
                <div className='flex w-full justify-center pt-6'>
                    <Image src={logoWhiteText} alt="Logo RevivePotosi" width="160" />
                </div>
                <h1 className="text-white text-xl font-medium tracking-wide text-center pt-4 pb-6">Ingreso de usuario</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="text-white text-md">Nombre de usuario</label>
                        <InputText id="username" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-white text-md">Contraseña</label>
                        <Password id="password" pt={passwordStyle} />
                    </div>
                </div>
                <div className="flex justify-end pt-6">
                    <Button label="¿Olvidaste tu contraseña?" severity="secondary" link size="small" />
                </div>
                <div className="flex flex-col pb-6 pt-4">
                    <Button label="Ingresar" />
                </div>
            </div>
        </main>
    );
};

export default Login;
