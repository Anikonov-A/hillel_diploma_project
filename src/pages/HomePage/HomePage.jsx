import "./HomePage.scss"
import HeroSection from "./HeroSection/HeroSection";
import About from "./AboutSection/AboutSection";
import WhoWeAre from "./WhoWeAreSection/WhoWeAreSection";
import "./HomePage.scss"

import OfferCardsSection from "./OfferCardsSection/OfferCardsSection";

export default function HomePage() {
    return (
        <main className="wrapper">
            <HeroSection/>
            <OfferCardsSection />
            <About/>
            <WhoWeAre/>
        </main>
    )
}