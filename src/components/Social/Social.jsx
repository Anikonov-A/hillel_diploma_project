import './Social.scss';
import {NavLink} from "react-router-dom";

function Social ({ name, url, src}) {
    return (
        <li key={name}>
            <NavLink to={url} target="_blank">
                <img src={src} alt={name} />
            </NavLink>
        </li>
    )
}

export default Social;