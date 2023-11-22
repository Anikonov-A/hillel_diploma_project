import "./OfferCard.scss"
import {Link} from "react-router-dom";
import Span from "../Span/Span";
import {paths} from '@/common/url';
import {string} from "prop-types";

export default function OfferCard({cardClass, spanText, pText}) {
    return (
            <Link to={paths.SHOP} className="card-link">
                <div className={`${cardClass} card-wrapper`}>
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
}

//Example with position absolute
// export function DiscountCard(){
//     return (
//         <Link to={paths.SHOP} className="card-item-link">
//             <div className="disc-wrapper">
//                 <img src="./images/cards-bg/first-card.jpg" alt="first-card"/>
//                 <div className="content-box">
//                     <Span>Natural!!</Span>
//                     <p>Get Garden <br/> Fresh Fruits</p>
//                 </div>
//             </div>
//         </Link>
//     )
// }