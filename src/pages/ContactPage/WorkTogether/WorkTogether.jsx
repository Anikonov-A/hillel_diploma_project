import './WorkTogether.scss';
import Title from '../../../components/Title/Title';
import Paragraph from '../../../components/Paragraph/Paragraph';
import ContactCard from './ContactCard/ContactCard';
import SocialList from '../../../components/SocialList/SocialList';
function WorkTogether () {
    return (
        <section className="cooperation">
            <div className="container">
                <div className="cooperation__wrapper">
                    <img src="/images/contacts/fruits.webp" alt="fruits" className="cooperation__image" />
                    <div className="cooperation__content" data-aos="fade-up">
                        <Title addClasses="cooperation__title" size={2}>
                            We'd love to talk about how we can work together.
                        </Title>
                        <Paragraph addClasses="cooperation__desc">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </Paragraph>
                        <div className="cooperation__contacts">
                            <ContactCard
                                contactText="support@organic.com"
                                titleText="Message"
                                altText="email"
                                src="./images/contacts/mail.svg"
                                path="mailto:support@organic.com">
                            </ContactCard>
                            <ContactCard
                                contactText="+01 123 456 789"
                                titleText="Contact Us"
                                altText="phone"
                                src="./images/contacts/call.svg"
                                path="tel:+01123456789">
                            </ContactCard>
                        </div>
                        <SocialList></SocialList>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkTogether;