import { useState } from 'react';

const useMainContainer = () => {
    const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
    const openSidebar = () => setSidebarVisible(true);
    const closeSidebar = () => setSidebarVisible(false);
    return { sidebarVisible, openSidebar, closeSidebar };
};

export default useMainContainer;
