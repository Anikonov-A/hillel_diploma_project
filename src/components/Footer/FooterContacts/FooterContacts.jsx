import './FooterContacts.scss';
import Title from '../../Title/Title';
import {NavLink} from 'react-router-dom';
import Paragraph from '../../Paragraph/Paragraph';
function FooterContacts () {
    return (
        <div className="footer__contacts">
            <Title addClasses="footer__contacts-title" size={5}>Contact Us</Title>
            <div className="footer__contacts-wrapper">
                <div className="footer__contacts-contact">
                    <div className="footer__contacts-name">Email</div>
                    <Paragraph>
                        <NavLink to="mailto:needhelp@Organia.com">needhelp@Organia.com</NavLink>
                    </Paragraph>
                </div>
                <div className="footer__contacts-contact">
                    <div className="footer__contacts-name">Phone</div>
                    <Paragraph>
                        <NavLink to="tel:666888888">666 888 888</NavLink>
                    </Paragraph>
                </div>
                <div className="footer__contacts-contact">
                    <div className="footer__contacts-name">Address</div>
                    <Paragraph>
                        <NavLink to="#">88 road, Brooklyn street, USA</NavLink>
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}

export default FooterContacts;