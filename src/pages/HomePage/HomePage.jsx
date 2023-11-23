import HeroSection from "./HeroSection/HeroSection";
import "./HomePage.scss"

import OfferCardsSection from "./OfferCardsSection/OfferCardsSection";

export default function HomePage() {
    return (
        <main className="wrapper">
            <HeroSection/>
            <OfferCardsSection />
        </main>
    )
}