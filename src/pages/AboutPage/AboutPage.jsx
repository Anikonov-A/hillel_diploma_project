import './AboutPage.scss'
import AboutUsSection from './AboutUsSection/AboutUsSection'
import ChooseUsSection from './ChooseUsSection/ChooseUsSection';
import TeamSection from "./TeamSection/TeamSection";

function AboutPage () {
  return (
    <main className="wrapper">
        <AboutUsSection/>
        <ChooseUsSection/>
        <TeamSection sliceFrom={0} sliceTo={3} />
    </main>
)
}

export default AboutPage;