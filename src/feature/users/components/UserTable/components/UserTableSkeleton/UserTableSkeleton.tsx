/* eslint-disable import/named */
import { Column } from 'primereact/column';
import { DataTable, DataTableValue } from 'primereact/datatable';
import { Skeleton } from 'primereact/skeleton';
import USER_MAIN_SCREEN_STR from '../../../../constants/UserMainScreenStr';
import ActionButtons from '../ActionButtons/ActionButtons';

const UserTableSkeleton = () => {
    const items: DataTableValue[] = Array.from({ length: 5 }, () => ({}));

    function bodyTemplate(): JSX.Element {
        return <Skeleton />;
    }

    return (
        <div className="card">
            <DataTable
                value={items}
                className="flex flex-col"
                paginator
                rows={5}
            >
                <Column
                    className="flex-1"
                    field={USER_MAIN_SCREEN_STR.table.header.username.field}
                    header={USER_MAIN_SCREEN_STR.table.header.username.header}
                    body={bodyTemplate}
                />
                <Column
                    className="flex-1"
                    field={USER_MAIN_SCREEN_STR.table.header.name.field}
                    header={USER_MAIN_SCREEN_STR.table.header.name.header}
                    body={bodyTemplate}
                />
                <Column
                    className="flex-1"
                    field={USER_MAIN_SCREEN_STR.table.header.lastname.field}
                    header={USER_MAIN_SCREEN_STR.table.header.lastname.header}
                    body={bodyTemplate}
                />
                <Column
                    className="flex flex-1 flex-row justify-center gap-4 px-4"
                    field={USER_MAIN_SCREEN_STR.table.header.actions.field}
                    header={USER_MAIN_SCREEN_STR.table.header.actions.header}
                    body={() => <ActionButtons loading />}
                />
            </DataTable>
        </div>
    );
};

export default UserTableSkeleton;
