import './ContactPage.scss'
import StyleGuide from "../../components/StyleGuide/StyleGuide";
import LocationSection from './LocationSection/LocationSection';
import WorkTogether from './WorkTogether/WorkTogether';


function ContactPage() {
    return (
        <div className="wrapper">
            <StyleGuide titleText="Contact Us" backgroundClass="bg-contact"/>
            <WorkTogether/>
            <LocationSection/>
        </div>
    )
}

export default ContactPage;