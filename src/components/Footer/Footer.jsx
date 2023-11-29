import './Footer.scss';
import FooterContacts from './FooterContacts/FooterContacts';
import FooterSocial from './FooterSocial/FooterSocial';
import UtilityPages from './UtilityPages/UtilityPages';
import Copyright from './Copyright/Copyright';
function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <FooterContacts></FooterContacts>
                    <FooterSocial></FooterSocial>
                    <UtilityPages></UtilityPages>
                </div>
            </div>
            <Copyright></Copyright>
        </footer>
    )
}

export default Footer;