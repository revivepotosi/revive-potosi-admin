/* eslint-disable import/named */
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import USER_MAIN_SCREEN_STR from '../../constants/UserMainScreenStr';
import { Props, defaultProps } from './types';
import { User } from '../../../../interfaces/user.interface';
import ActionButtons from './components/ActionButtons/ActionButtons';
import USER_TABLE_STR from './UserTableStr';

const UserTable = ({ users, filters }: Props) => (
    <div className="card">
        <DataTable
            value={users}
            className="flex flex-col bg-gray-900 rounded"
            paginator
            rows={5}
            globalFilterFields={USER_TABLE_STR.globalFilterFields}
            emptyMessage={USER_TABLE_STR.emptyTable}
            filters={filters}
        >
            <Column
                className="flex-1"
                field={USER_MAIN_SCREEN_STR.table.header.username.field}
                header={USER_MAIN_SCREEN_STR.table.header.username.header}
            />
            <Column
                className="flex-1"
                field={USER_MAIN_SCREEN_STR.table.header.name.field}
                header={USER_MAIN_SCREEN_STR.table.header.name.header}
            />
            <Column
                className="flex-1"
                field={USER_MAIN_SCREEN_STR.table.header.lastname.field}
                header={USER_MAIN_SCREEN_STR.table.header.lastname.header}
            />
            <Column
                className="flex flex-1 flex-row justify-center gap-4 px-4"
                field={USER_MAIN_SCREEN_STR.table.header.actions.field}
                header={USER_MAIN_SCREEN_STR.table.header.actions.header}
                body={(user: User) => <ActionButtons user={user} />}
            />
        </DataTable>
    </div>
);

UserTable.defaultProps = defaultProps;

export default UserTable;
