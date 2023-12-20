import "./HomePage.scss"
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import WhoWeAre from "./WhoWeAreSection/WhoWeAreSection";
import OfferSection from '../../components/OfferSection/OfferSection';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import "./HomePage.scss"

import OfferCardsSection from "./OfferCardsSection/OfferCardsSection";
import Slider from "./TestimonialSection/TestimonialSection";
import {ToastContainer} from "react-toastify";
import React from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
        duration: 800,
        once: true,
        offset: 150
    }
);
export default function HomePage() {
    return (
        <main className="wrapper">
            <HeroSection/>
            <OfferCardsSection />
            <AboutSection className='AboutSection' />
            <CategoriesSection></CategoriesSection>
            <Slider/>
            <OfferSection/>
            <WhoWeAre/>
            <ToastContainer
                enableMultiContainer={true}
                containerId={"id4"}
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
                theme="light"
                limit={3}
            />
        </main>
    )
}