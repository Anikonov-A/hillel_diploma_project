import './ContactPage.scss'
import StyleGuide from "../../components/StyleGuide/StyleGuide";
import WorkTogether from './WorkTogether/WorkTogether';
function ContactPage () {
return(
    <div className="wrapper">
        <StyleGuide titleText="Contact Us" backgroundClass="bg-contact" />
        <WorkTogether></WorkTogether>
    </div>
)
}

export default ContactPage;