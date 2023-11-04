import { Route, Navigate, Routes } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import Login from './feature/login/container/Login';
import 'primeicons/primeicons.css';
import AuthProvider from './context/Auth/AuthProvider';
import Home from './feature/home/container/Home';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ToastProvider from './context/Toast/ToastProvider';
import Toast from './components/Toast/Toast';

export default function App() {
    return (
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <AuthProvider>
                <ToastProvider>
                    <>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/home"
                                element={
                                    <RequireAuth>
                                        <Home />
                                    </RequireAuth>
                                }
                            />
                            <Route path="*" element={<Navigate to="/home" replace />} />
                        </Routes>
                        <Toast />
                    </>
                </ToastProvider>
            </AuthProvider>
        </PrimeReactProvider>
    );
}
