import './Logo.scss'
import {Link} from "react-router-dom";
function Logo () {
    return (
        <Link to="/">
            <div className="logo">
                <img className="logo__image" src="./images/logo/logo.svg" alt="logo" />
                <div className="logo__title">Organick</div>
            </div>
        </Link>
    );
}

export default Logo;