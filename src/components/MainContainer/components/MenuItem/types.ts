import { MenuItem } from '../../../../interfaces/menuItem.interface';

interface Props extends MenuItem {}

const defaultProps: Props = {
    icon: '',
    label: '',
    onClick: () => null,
};

export { type Props, defaultProps };
