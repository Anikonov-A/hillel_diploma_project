import "./OfferCard.scss"
import {Link} from "react-router-dom";
import Span from "@/components/Span/Span";
import {func, string} from "prop-types";

export default function OfferCard({cardClass, spanText, pText, link, moveTop, anim}) {
    return (
            <Link to={link} onClick={moveTop} className="card-link" data-aos={anim}>
                <div className={`${cardClass} card-block`}>
                    <div className="content-block">
                        <Span>{spanText}</Span>
                        <p>{pText}</p>
                    </div>
                </div>
            </Link>
    )
}

OfferCard.propTypes = {
    cardClass: string,
    spanClass: string,
    spanText: string,
    pText: string,
    link: string,
    moveTop: func
}