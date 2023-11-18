/* eslint-disable import/named */
import {
    SidebarPassThroughOptions,
    Sidebar as SidebarPrime,
} from 'primereact/sidebar';
import { Props } from './types';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import useAuth from '../../../../hooks/useAuth';
import { getAvatarLetter } from '../../../../utils/utils';

const sidebarStyle: SidebarPassThroughOptions = {
    content: {
        className: classNames('flex flex-col h-full'),
    },
};

const Sidebar = ({ sidebarVisible, closeSidebar }: Props) => {
    const {
        session: { fullName },
        logout,
    } = useAuth();
    return (
        <SidebarPrime
            visible={sidebarVisible}
            position="right"
            onHide={closeSidebar}
            pt={sidebarStyle}
        >
            <div className="flex flex-col items-center gap-4 mb-6">
                <Avatar
                    label={getAvatarLetter(fullName)}
                    size="xlarge"
                    shape="circle"
                />
                <p className="text-white text-md">{fullName}</p>
            </div>
            <div className="flex-1 flex">
                <h2>Hola</h2>
                <h2>Hola</h2>
            </div>
            <div className="flex justify-center mb-6">
                <Button label="Cerrar sesión" onClick={() => logout()} />
            </div>
        </SidebarPrime>
    );
};

export default Sidebar;
