import { MenuItem } from '../../../../interfaces/menuItem.interface';

interface Props {
    items: MenuItem[];
}

const defaultProps: Props = {
    items: [],
};

export { type Props, defaultProps };
