import { Props } from './types';

const MenuItem = ({ icon, label, onClick }: Props) => (
    <button
        onClick={onClick}
        className="flex flex-row gap-4 justify-start items-center"
    >
        <i className={icon}></i>
        <p>{label}</p>
    </button>
);

export default MenuItem;
