import { Route, Navigate, Routes, useNavigate } from 'react-router-dom';
import Login from '../feature/login/container/Login';
import Home from '../feature/home/container/Home';
import RequireAuth from '../components/RequireAuth/RequireAuth';
import NoRequireAuth from '../components/NoRequireAuth/NoRequireAuth';
import MainContainer from '../components/MainContainer/MainContainer';
import GeneralError from '../feature/errors/container/GeneralError';
import ROUTES from './routes';
import SessionExpired from '../feature/errors/container/SessionExpired';
import globalRouter from './globalRouter';
import Forbidden from '../feature/errors/container/Forbidden';
import CreateUser from '../feature/users/containers/CreateUser';

const AppNavigation = () => {
    const navigate = useNavigate();
    globalRouter.navigate = navigate;
    return (
        <Routes>
            <Route
                path={ROUTES.LOGIN}
                element={
                    <NoRequireAuth>
                        <Login />
                    </NoRequireAuth>
                }
            />
            <Route path={ROUTES.GENERAL_ERROR} element={<GeneralError />} />
            <Route path={ROUTES.SESSION_EXPIRED} element={<SessionExpired />} />
            <Route
                path={ROUTES.HOME}
                element={
                    <RequireAuth>
                        <MainContainer />
                    </RequireAuth>
                }
            >
                <Route index element={<Home />} />
                <Route path={ROUTES.USER.CREATE} element={<CreateUser />} />
            </Route>
            <Route
                path={ROUTES.FORBIDDEN}
                element={
                    <RequireAuth>
                        <Forbidden />
                    </RequireAuth>
                }
            />
            <Route
                path={ROUTES.ALL}
                element={<Navigate to={ROUTES.HOME} replace />}
            />
        </Routes>
    );
};

export default AppNavigation;
