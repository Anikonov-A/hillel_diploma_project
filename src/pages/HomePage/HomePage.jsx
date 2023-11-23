import HeroSection from "./HeroSection/HeroSection";
import WhoWeAre from "./WhoWeAreSection/WhoWeAreSection";
import "./HomePage.scss"

import OfferCardsSection from "./OfferCardsSection/OfferCardsSection";

export default function HomePage() {
    return (
        <main className="wrapper">
            <HeroSection/>
            <WhoWeAre/>
            <OfferCardsSection />
        </main>
    )
}