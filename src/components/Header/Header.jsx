import './Header.scss'
import Logo from '../Logo/Logo';
import Navigation from "./Navigation/Navigation";
import UserActions from "./UserActions/UserActions";

function Header () {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__inner">
                    <Logo />
                    <Navigation />
                    <UserActions />
                </div>
            </div>
        </header>
    )
}

export default Header;