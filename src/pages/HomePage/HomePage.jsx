import "./HomePage.scss"
import HeroSection from "./HeroSection/HeroSection";
import WhoWeAre from "./WhoWeAreSection/WhoWeAreSection";
import OfferSection from './OfferSection/OfferSection';
import "./HomePage.scss"

import OfferCardsSection from "./OfferCardsSection/OfferCardsSection";

export default function HomePage() {
    return (
        <main className="wrapper">
            <HeroSection/>
            <OfferCardsSection />
            <OfferSection category="Vegetables"></OfferSection>
            {/*Uncomment to see how it works*/}
            {/*<OfferSection category="Fresh"></OfferSection>*/}
            {/*<OfferSection category="Nuts"></OfferSection>*/}
            <WhoWeAre/>
        </main>
    )
}