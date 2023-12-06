import "./HomePage.scss"
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import WhoWeAre from "./WhoWeAreSection/WhoWeAreSection";
import OfferSection from '../../components/OfferSection/OfferSection';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import "./HomePage.scss"

import OfferCardsSection from "./OfferCardsSection/OfferCardsSection";
import Slider from "./TestimonialSection/TestimonialSection";

export default function HomePage() {
    return (
        <main className="wrapper">
            <HeroSection/>
            <OfferCardsSection />
            <AboutSection className='AboutSection'/>
            <CategoriesSection></CategoriesSection>
            <Slider/>
            <OfferSection/>
            <WhoWeAre/>
        </main>
    )
}