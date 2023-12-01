import "./HomePage.scss"
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import WhoWeAre from "./WhoWeAreSection/WhoWeAreSection";
import OfferSection from './OfferSection/OfferSection';
import "./HomePage.scss"

import OfferCardsSection from "./OfferCardsSection/OfferCardsSection";

export default function HomePage() {
    return (
        <main className="wrapper">
            <HeroSection/>
            <OfferCardsSection />
            <AboutSection className='AboutSection'/>
            <OfferSection title="We Offer Organic For You"></OfferSection>
            <WhoWeAre/>
        </main>
    )
}