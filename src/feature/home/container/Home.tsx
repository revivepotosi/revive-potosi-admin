import { Button } from 'primereact/button';
import useHome from '../hooks/useHome';

const Home = () => {
    const { logoutUser } = useHome();
    return (
        <div>
            <Button label="Salir" onClick={logoutUser} />
        </div>
    );
};

export default Home;
