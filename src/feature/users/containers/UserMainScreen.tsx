import { Button } from 'primereact/button';
import UserTableSkeleton from '../components/UserTable/components/UserTableSkeleton/UserTableSkeleton';
import { InputText } from 'primereact/inputtext';
import useUserMainScreen from '../hooks/useUserMainScreen';
import UserTable from '../components/UserTable/UserTable';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../navigation/routes';

const UserMainScreen = () => {
    const { users, loadingUsers, globalFilter, onGlobalFilterChange, filters } =
        useUserMainScreen();
    const navigate = useNavigate();
    return (
        <div className="md:px-6 xl:px-10">
            <div>
                <h2 className="pt-10 pb-6 px-4 md:px-0 text-white text-4xl text-center md:text-left">
                    Gestión de usuarios
                </h2>
                <div className="flex md:justify-between pb-6 flex-col md:flex-row gap-6 md:gap-0 px-4 md:px-0">
                    <Button
                        label="Crear Usuario"
                        disabled={loadingUsers}
                        onClick={() => navigate(ROUTES.USER.CREATE)}
                    />
                    <InputText
                        id="seek"
                        placeholder="Buscar Usuario"
                        disabled={loadingUsers}
                        value={globalFilter}
                        onChange={onGlobalFilterChange}
                    />
                </div>
            </div>
            {loadingUsers ? (
                <UserTableSkeleton />
            ) : (
                <UserTable users={users ?? []} filters={filters} />
            )}
        </div>
    );
};

export default UserMainScreen;
