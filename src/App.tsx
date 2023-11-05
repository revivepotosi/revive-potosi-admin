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
import NoRequireAuth from './components/NoRequireAuth/NoRequireAuth';
import MainContainer from './components/MainContainer/MainContainer';

export default function App() {
    return (
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <AuthProvider>
                <ToastProvider>
                    <>
                        <Routes>
                            <Route
                                path="/login"
                                element={
                                    <NoRequireAuth>
                                        <Login />
                                    </NoRequireAuth>
                                }
                            />
                            <Route
                                path="/"
                                element={
                                    <RequireAuth>
                                        <MainContainer />
                                    </RequireAuth>
                                }
                            >
                                <Route
                                    index
                                    element={<Home />}
                                />
                            </Route>
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                        <Toast />
                    </>
                </ToastProvider>
            </AuthProvider>
        </PrimeReactProvider>
    );
}
