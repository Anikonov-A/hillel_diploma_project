import './NavItem.scss'
import {NavLink} from 'react-router-dom';

function NavItem ({name, path , cb}) {
    return (
        <li className="navbar__list-item">
            <NavLink to={path} onClick={cb}>{name}</NavLink>
        </li>
    )
}

export default NavItem;