import './FooterSocial.scss';
import Logo from '../../Logo/Logo';
import Paragraph from '../../Paragraph/Paragraph';
import {NavLink} from 'react-router-dom';
import {imagePaths} from '../../../common/url';
import {outerUrls} from '../../../common/url';

function FooterSocial () {
    const socialMedias= [
        {name: "Instagram", src: imagePaths.Instagram, url: outerUrls.Instagram},
        {name: "Facebook", src: imagePaths.Facebook, url: outerUrls.Facebook},
        {name: "Twitter", src: imagePaths.Twitter, url: outerUrls.Twitter},
        {name: "Pinterest", src: imagePaths.Pinterest, url: outerUrls.Pinterest}
    ]
    return (
        <div className="footer__socials">
            <Logo></Logo>
            <Paragraph addClasses="footer__socials-desc">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
            </Paragraph>
            <ul className="footer__socials-list">
                {socialMedias.map(socialMedia => (
                    <li key={socialMedia.name}>
                        <NavLink to={socialMedia.url}>
                            <img src={socialMedia.src} alt={socialMedia.name} />
                        </NavLink>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default FooterSocial;