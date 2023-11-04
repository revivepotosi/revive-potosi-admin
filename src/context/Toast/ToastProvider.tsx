import { useRef } from 'react';
// eslint-disable-next-line import/named
import { Toast, ToastMessage } from 'primereact/toast';
import ToastContext from './ToastContext';
import { ToastState, ToastProviderProps } from './props';



const ToastProvider = (props: ToastProviderProps) => {
    const { children } = props;
    const toastRef = useRef<Toast>(null);

    const showToast = (toastMessage: ToastMessage) => {
        toastRef.current?.show({
            severity: toastMessage.severity,
            summary: toastMessage.summary,
            detail: toastMessage.detail,
        });
    };

    const value: ToastState = {
        toastRef,
        showToast,
    };

    return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

export default ToastProvider;
