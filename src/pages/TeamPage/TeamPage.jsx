import './TeamPage.scss'
import TeamSection from "../AboutPage/TeamSection/TeamSection";
import StyleGuide from "../../components/StyleGuide/StyleGuide";

function TeamPage () {
    return(
        <div className="wrapper">
            <StyleGuide titleText="Our team" backgroundClass="bg-team" />
            <TeamSection />
        </div>
    )

}

export default TeamPage;