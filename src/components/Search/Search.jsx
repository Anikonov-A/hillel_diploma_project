import './Search.scss';
import {NavLink} from 'react-router-dom';
import icon from '../../images/Search/Search.svg';
import {paths} from '../../common/url';

function Search () {
    return (
        <div className="search">
            <form className="search__form">
                <div className="search__wrapper">
                    <label htmlFor="searchInput"></label>
                    <input type="text" id="searchInput" className="search__input"/>
                </div>
                <NavLink to={paths.SHOP}>
                    <img src={icon} alt="search-icon"/>
                </NavLink>
            </form>
        </div>
    )
}

export default Search;