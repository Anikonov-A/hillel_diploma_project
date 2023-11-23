import './NavItem.scss'
import {NavLink} from 'react-router-dom';

function NavItem ({name, path}) {
    return (
        <li className="navbar__list-item">
            <NavLink to={path}>{name}</NavLink>
        </li>
    )
}

export default NavItem;