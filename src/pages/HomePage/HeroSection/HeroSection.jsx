import "./HeroSection.scss"
import Span from "@/components/Span/Span";
import Title from "@/components/Title/Title";
import {NavButton} from "@/components/Buttons/Buttons";

export default function HeroSection() {
    return (
        <section className="heroSection">
            <div className="container" data-aos="fade-up">
                <div className="heroContentBlock">
                    <Span addClasses="spanMb">
                        100% Natural Food
                    </Span>
                    <div>
                        <Title size={1} >Choose the best healthier way <br/> of life</Title>
                    </div>
                    <NavButton to="/about" className="button yellow" text="Explore Now"/>
                </div>
            </div>
        </section>

    )
}