import { Button } from 'primereact/button';
import useHome from '../hooks/useHome';

const Home = () => {
    const { logout } = useHome();
    return (
        <div>
            <Button label='Salir' onClick={logout}/>
        </div>
    )
};

export default Home;
