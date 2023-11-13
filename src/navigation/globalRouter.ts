// eslint-disable-next-line import/named
import { NavigateFunction } from 'react-router-dom';

interface GlobalRouter {
    navigate: null | NavigateFunction;
}

const globalRouter: GlobalRouter = { navigate: null };

export default globalRouter;
