import { Button } from 'primereact/button';
import { Props, defaultProps } from './types';

const ActionButtons = ({ user, loading }: Props) => (
    <>
        <Button
            icon="pi pi-eye"
            severity="info"
            aria-label="Ver"
            disabled={loading}
            onClick={() => alert(user._id)}
        />
        <Button
            icon="pi pi-pencil"
            severity="secondary"
            aria-label="Editar"
            disabled={loading}
            onClick={() => alert(user._id)}
        />
        <Button
            icon="pi pi-trash"
            severity="danger"
            aria-label="Eliminar"
            disabled={loading}
            onClick={() => alert(user._id)}
        />
    </>
);

ActionButtons.defaultProps = defaultProps;

export default ActionButtons;
