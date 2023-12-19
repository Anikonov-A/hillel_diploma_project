import "./HomePage.scss"
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import WhoWeAre from "./WhoWeAreSection/WhoWeAreSection";
import OfferSection from '../../components/OfferSection/OfferSection';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import "./HomePage.scss"

import OfferCardsSection from "./OfferCardsSection/OfferCardsSection";
import Slider from "./TestimonialSection/TestimonialSection";

import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from "react";

export default function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100
            }
        );
    }, [])
    return (
        <main className="wrapper">
            <HeroSection/>
            <OfferCardsSection />
            <AboutSection className='AboutSection' />
            <CategoriesSection></CategoriesSection>
            <Slider/>
            <OfferSection/>
            <WhoWeAre/>
        </main>
    )
}