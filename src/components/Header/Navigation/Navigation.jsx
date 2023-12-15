import './Navigation.scss';
import NavItem from "../NavItem/NavItem";
import {paths} from '@/common/url';
import {scrollTop} from "../../../common/scrollFunction";
function Navigation () {
    const pages = [
        {name: 'Home', path: paths.MAIN},
        {name: 'About',path: paths.ABOUT},
        {name: 'Shop', path: paths.SHOP},
        {name: 'Services', path: paths.SERVICES},
        {name: 'Team', path: paths.TEAM},
        {name: 'Contact us', path: paths.CONTACTS},
    ];


    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {pages.map((page, index) => (
                    <NavItem key={index} name={page.name} path={page.path} cb={scrollTop}/>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;