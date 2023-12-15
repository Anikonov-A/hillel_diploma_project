import './Copyright.scss';
import Paragraph from '../../Paragraph/Paragraph';
import {NavLink} from 'react-router-dom';
import {paths} from '../../../common/url';
import {scrollTop} from "../../../common/scrollFunction";
function Copyright () {
    return (
        <div className="copyright">
            <Paragraph>Copyright ©</Paragraph>
            <div className="copyright__title">
                <NavLink to={paths.MAIN} onClick={scrollTop}>Organick</NavLink>
            </div>
        </div>
    )
}

export default Copyright;