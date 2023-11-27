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
            <OfferSection category="Vegetables" title="We Offer Organic For You"></OfferSection>
            <WhoWeAre/>
        </main>
    )
}