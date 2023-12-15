import "./OfferCardsSection.scss"
import OfferCard from "@/components/OfferCard/OfferCard";
import {paths} from '@/common/url';
export default function OfferCardsSection(){
    function scrollTop(){
        window.scrollTo(0,0)
    }
    return(
        <div className="offers-container">
            <OfferCard moveTop={scrollTop} link={paths.FRESH} cardClass="first-card" spanText="Natural!!"  pText="Get Garden Fresh Fruits" />
            <OfferCard moveTop={scrollTop} link={paths.VEGETABLES} cardClass="second-card" spanText="Offer!!" pText="Get 10% off on Vegetables"/>
        </div>
    )
}