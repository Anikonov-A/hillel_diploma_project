import './FooterSocials.scss';
import Logo from '../Logo/Logo';
import Paragraph from '../Paragraph/Paragraph';
import SocialList from '../SocialList/SocialList';

function FooterSocials () {

    return (
        <div className="socials">
            <Logo />
            <Paragraph addClasses="socials__desc">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
            </Paragraph>
            <SocialList />
        </div>
    )
}

export default FooterSocials;