interface Props {
    sidebarVisible: boolean;
    closeSidebar: () => void;
}

const defaultProps = {
    sidebarVisible: false,
    closeSidebar: () => null,
};

export { type Props, defaultProps };
