/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/named */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, ChangeEvent } from 'react';
import useUserService from './useUserService';
import { User } from '../../../interfaces/user.interface';
import { DataTableFilterMeta } from 'primereact/datatable';
import { defaultFilters } from '../constants/filters';

const useUserMainScreen = () => {
    const { getUser } = useUserService();
    const [users, setUsers] = useState<User[]>();
    const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const [filters, setFilters] = useState<DataTableFilterMeta>(defaultFilters);

    useEffect(() => {
        setLoadingUsers(true);
        getUser()
            .then((users: User[]) => setUsers(users))
            .catch((error: string) => console.error(error))
            .finally(() => setLoadingUsers(false));
    }, []);

    const onGlobalFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const _filters = { ...filters };
        // @ts-ignore
        _filters['global'].value = value;
        setFilters(_filters);
        setGlobalFilter(value);
    };
    return { users, loadingUsers, globalFilter, onGlobalFilterChange, filters };
};

export default useUserMainScreen;
