import './UtilityPages.scss';
import Title from '../../Title/Title';
import {paths} from '../../../common/url';
import {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {scrollTop} from "../../../common/scrollFunction";
function UtilityPages () {
    const pages = [
        {name: "404 Not Found", path: paths.ERROR},
        {name: "Password Protected", path: paths.PASSWORD},
        {name: "Licences", path: paths.LICENCES},
        {name: "Changelog", path: paths.CHANGELOG}
    ]
    return (
        <div className="utility__pages">
            <Title addClasses="utility__pages-title" size={5}>Utility Pages</Title>
            <ul className="utility__pages-list">
                {pages.map((page) => {
                    return (
                        <Fragment key={page.name}>
                            <li>
                                <NavLink to="#" onClick={scrollTop}>{page.name}</NavLink>
                            </li>
                        </Fragment>
                    )
                })}
            </ul>
        </div>
    )
}

export default UtilityPages;