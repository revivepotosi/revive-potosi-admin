import { Image } from 'primereact/image';
import { Outlet } from 'react-router-dom';
import logoWhiteText from '../../assets/images/logo-white-text.png';

const MainContainer = () => {
    return (
        <main className="bg-login bg-center bg-no-repeat bg-cover bg-fixed min-h-screen pt-20">
            <header className="fixed h-20 w-full bg-sky-950 z-50 top-0 flex items-center">
                <div className="container mx-6 md:mx-auto flex items-center justify-between">
                    <button onClick={() => alert('logo')}>
                        <Image
                            src={logoWhiteText}
                            alt="Logo RevivePotosi"
                            width="40"
                        />
                    </button>
                    <h1 className="hidden md:block text-white text-xl font-medium tracking-wide text-center pt-4 pb-6">
                        Revive Potosi
                    </h1>
                    <button onClick={() => alert('icon')}>
                        <i className="pi text-4xl pi-bars text-white cursor-pointer" />
                    </button>
                </div>
            </header>
            <Outlet />
        </main>
    );
};

export default MainContainer;
