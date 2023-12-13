import './AboutPage.scss'
import AboutUsSection from './AboutUsSection/AboutUsSection'
import ChooseUsSection from './ChooseUsSection/ChooseUsSection';
import TeamSection from "./TeamSection/TeamSection";
import StyleGuide from "../../components/StyleGuide/StyleGuide";
import OfferSection from '../../components/OfferSection/OfferSection';
import React from "react";

function AboutPage () {
  return (
    <main className="wrapper">
        <StyleGuide titleText="About us" backgroundClass="bg-about_us"/>
        <AboutUsSection/>
        <ChooseUsSection/>
        <TeamSection sliceFrom={0} sliceTo={3} />
        <OfferSection/>
    </main>
)
}

export default AboutPage;