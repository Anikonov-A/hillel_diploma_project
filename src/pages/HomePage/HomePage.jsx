import "./HomePage.scss"
import HeroSection from "./HeroSection/HeroSection";
import OfferCardsSection from "./OfferCardsSection/OfferCardsSection";

export default function HomePage() {
    return (
        <main className="wrapper">
            <HeroSection/>
            <OfferCardsSection />
        </main>
    )
}