import { Toast as ToastPrime } from 'primereact/toast';
import useToast from '../../hooks/useToast';

const Toast = () => {
    const { toastRef } = useToast();

    return (
        <div className="flex justify-center">
            <ToastPrime ref={toastRef} />
        </div>
    );
};

export default Toast;
