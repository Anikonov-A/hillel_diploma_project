import './ContactPage.scss'
import StyleGuide from "../../components/StyleGuide/StyleGuide";
import LocationSection from './LocationSection/LocationSection';
function ContactPage () {
return(
    <div className="wrapper">
        <StyleGuide titleText="Contact Us" backgroundClass="bg-contact" />
        <LocationSection></LocationSection>
    </div>
)
}

export default ContactPage;