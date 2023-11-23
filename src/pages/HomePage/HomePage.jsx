import HeroSection from "./HeroSection/HeroSection";
import WhoWeAre from "./WhoWeAreSection/WhoWeAreSection";
import "./HomePage.scss"

export default function HomePage() {
    return (
        <main className="wrapper">
            <HeroSection/>
            <WhoWeAre/>
        </main>
    )
}