import { User, defaultUser } from '../../../../../../interfaces/user.interface';

interface Props {
    user: User;
    loading: boolean;
}

const defaultProps: Props = {
    user: defaultUser,
    loading: false,
};

export { type Props, defaultProps };
