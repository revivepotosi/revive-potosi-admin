import UserMainScreen from '../../users/containers/UserMainScreen';
import useHome from '../hooks/useHome';

const Home = () => {
    useHome();
    return <UserMainScreen />;
};

export default Home;
