import "./OfferCardsSection.scss"
import OfferCard from "@/components/OfferCard/OfferCard";

export default function OfferCardsSection(){
    return(
        <div className="offers-container">
            <OfferCard cardClass="first-card" spanText="Natural!!"  pText="Get Garden Fresh Fruits" />
            <OfferCard cardClass="second-card" spanText="Offer!!" pText="Get 10% off on Vegetables" />
        </div>
    )
}