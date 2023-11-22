/* eslint-disable import/named */
import {
    SidebarPassThroughOptions,
    Sidebar as SidebarPrime,
} from 'primereact/sidebar';
import { Props, defaultProps } from './types';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import useAuth from '../../../../hooks/useAuth';
import { getAvatarLetter } from '../../../../utils/utils';
import useMenu from '../../../../hooks/useMenu';
import Menu from '../Menu/Menu';

const sidebarStyle: SidebarPassThroughOptions = {
    content: {
        className: classNames('flex flex-col h-full'),
    },
};

const Sidebar = ({ sidebarVisible, closeSidebar }: Props) => {
    const {
        session: { fullName, roles },
        logout,
    } = useAuth();
    const { menuData } = useMenu({ roles });
    return (
        <SidebarPrime
            visible={sidebarVisible}
            position="right"
            onHide={closeSidebar}
            pt={sidebarStyle}
        >
            <div className="flex flex-col items-center gap-4 mb-10">
                <Avatar
                    label={getAvatarLetter(fullName)}
                    size="xlarge"
                    shape="circle"
                />
                <p className="text-white text-md">{fullName}</p>
            </div>
            <div className="flex-1 flex flex-col gap-6 px-8">
                <Menu items={menuData} />
            </div>
            <div className="flex justify-center mb-6">
                <Button label="Cerrar sesión" onClick={() => logout()} />
            </div>
        </SidebarPrime>
    );
};

Sidebar.defaultProps = defaultProps;

export default Sidebar;
