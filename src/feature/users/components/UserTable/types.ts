/* eslint-disable import/named */
import { DataTableFilterMeta } from 'primereact/datatable';
import { User } from '../../../../interfaces/user.interface';
import { defaultFilters } from '../../constants/filters';

interface Props {
    users: User[];
    filters: DataTableFilterMeta;
}

const defaultProps: Props = {
    users: [],
    filters: defaultFilters,
};

export { type Props, defaultProps };
