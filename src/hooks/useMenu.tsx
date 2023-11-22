import { Roles } from '../utils/roles';
import { hasRole } from '../utils/utils';
import { Role } from '../interfaces/role.interface';
import { MenuItem } from '../interfaces/menuItem.interface';

const useMenu = ({ roles }: { roles: Role[] }) => {
    const menuData: MenuItem[] = [];
    if (hasRole(roles, [Roles.super_admin, Roles.tourist_attraction_admin])) {
        menuData.push({
            label: 'Usuarios',
            icon: 'pi pi-user',
            onClick: () => alert('Usuarios'),
        });
    }
    if (hasRole(roles, [Roles.super_admin, Roles.user_admin])) {
        menuData.push({
            label: 'Atracciónes Turísticas',
            icon: 'pi pi-building',
            onClick: () => alert('Atracciónes Turísticas'),
        });
    }
    return { menuData };
};

export default useMenu;
