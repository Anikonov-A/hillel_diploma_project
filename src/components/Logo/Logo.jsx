import './Logo.scss'
import image from '../../images/Logo/Logo.svg'
import {Link} from "react-router-dom";
function Logo () {
    return (
        <Link to="/">
            <div className="logo">
                <img className="logo__image" src={image} alt="logo" />
                <div className="logo__title">Organick</div>
            </div>
        </Link>
    );
}

export default Logo;