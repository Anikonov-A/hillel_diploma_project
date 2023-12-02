import './TeamPage.scss'
import TeamSection from "../AboutPage/TeamSection/TeamSection";
import StyleGuide from "../../components/StyleGuide/StyleGuide";
import OfferSection from '../../components/OfferSection/OfferSection';
function TeamPage () {
    return(
        <div className="wrapper">
            <StyleGuide titleText="Our team" backgroundClass="bg-team" />
            <TeamSection />
            <OfferSection/>
        </div>
    )

}

export default TeamPage;