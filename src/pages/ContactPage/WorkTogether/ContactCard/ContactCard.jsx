import './ContactCard.scss';
import Title from "../../../../components/Title/Title";
import Paragraph from '../../../../components/Paragraph/Paragraph';
import {Link} from 'react-router-dom';

function ContactCard ({path, src, titleText, contactText, altText}) {
    return (
        <div className="contact__card">
            <Link to={path}>
                <div className="contact__card-image">
                    <img src={src} alt={altText}/>
                </div>
                <div className="contact__card-info">
                    <Title addClasses="contact__card-title" size={6}>{titleText}</Title>
                    <Paragraph addClasses="contact__card-desc">{contactText}</Paragraph>
                </div>
            </Link>
        </div>
    )
}

export default ContactCard;