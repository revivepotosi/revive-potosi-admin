import MenuItem from '../MenuItem/MenuItem';
import { Props } from './types';

const Menu = ({ items }: Props) =>
    items.map(({ label, icon, onClick }) => (
        <MenuItem key={label} label={label} onClick={onClick} icon={icon} />
    ));

export default Menu;
