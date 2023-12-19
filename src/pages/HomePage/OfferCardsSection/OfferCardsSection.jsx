import "./OfferCardsSection.scss"
import OfferCard from "@/components/OfferCard/OfferCard";
import {paths} from '@/common/url';
import {scrollTop} from "../../../common/scrollFunction";
export default function OfferCardsSection(){

    return(
        <div className="offers-container" >
            <OfferCard moveTop={scrollTop} link={paths.FRESH} cardClass="first-card" spanText="Natural!!"  pText="Get Garden Fresh Fruit" anim="fade-right"/>
            <OfferCard moveTop={scrollTop} link={paths.VEGETABLES} cardClass="second-card" spanText="Offer!!" pText="Get Fresh Vegetables" anim="fade-left"/>
        </div>
    )
}