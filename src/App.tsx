import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import 'primeicons/primeicons.css';
import AuthProvider from './context/Auth/AuthProvider';
import ToastProvider from './context/Toast/ToastProvider';
import Toast from './components/Toast/Toast';
import AppNavigation from './navigation/AppNavigation';

export default function App() {
    return (
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <AuthProvider>
                <ToastProvider>
                    <>
                        <AppNavigation />
                        <Toast />
                    </>
                </ToastProvider>
            </AuthProvider>
        </PrimeReactProvider>
    );
}
