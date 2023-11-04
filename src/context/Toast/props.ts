/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/named
import { Toast, ToastMessage } from 'primereact/toast';
import { RefObject } from 'react';

interface ToastState {
    toastRef: RefObject<Toast>;
    showToast: (toastMessage: ToastMessage) => void;
}

interface ToastProviderProps {
    children: JSX.Element;
}

export { type ToastState, type ToastProviderProps };
