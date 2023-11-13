// eslint-disable-next-line import/named
import { ButtonProps } from 'primereact/button';

interface Props {
    title: string;
    subtitle: string;
    buttons: ButtonProps[];
    iconClassName: string;
}

const defaultProps: Props = {
    title: '',
    subtitle: '',
    buttons: [],
    iconClassName: '',
};

export { type Props, defaultProps };
