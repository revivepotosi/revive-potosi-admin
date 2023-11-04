import { createContext } from 'react';
import { ToastState } from './props';
// eslint-disable-next-line import/named
import { ToastMessage } from 'primereact/toast';

export const initialState: ToastState = {
    toastRef: { current: null },
    showToast: (toastMessage: ToastMessage) => toastMessage,
};

const ToastContext = createContext(initialState);

export default ToastContext;
