import "./HomePage.scss"
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import WhoWeAre from "./WhoWeAreSection/WhoWeAreSection";
import OfferSection from '../../components/OfferSection/OfferSection';
import "./HomePage.scss"

import OfferCardsSection from "./OfferCardsSection/OfferCardsSection";
import Slider from "./TestimonialSection/TestimonialSection";

export default function HomePage() {
    return (
        <main className="wrapper">
            <HeroSection/>
            <OfferCardsSection />
            <AboutSection className='AboutSection'/>
            <Slider/>
            <OfferSection/>
            <WhoWeAre/>
        </main>
    )
}