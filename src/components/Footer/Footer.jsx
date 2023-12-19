import './Footer.scss';
import FooterContacts from './FooterContacts/FooterContacts';
import FooterSocials from '../FooterSocials/FooterSocials';
import UtilityPages from './UtilityPages/UtilityPages';
import Copyright from './Copyright/Copyright';
function Footer () {
    return (
        <footer className="footer">
            <div className="container" data-aos="fade-up">
                <div className="footer__inner">
                    <FooterContacts />
                    <FooterSocials />
                    <UtilityPages />
                </div>
            </div>
            <Copyright />
        </footer>
    )
}

export default Footer;