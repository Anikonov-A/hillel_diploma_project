import './LocationLink.scss';
import {Link} from "react-router-dom";
import Paragraph from '../../../../components/Paragraph/Paragraph';

function LocationLink ({ country, city, address}) {

    return (
        <li className="location__place">
            <Link to="https://www.google.com/maps/@48.49664,35.0552064,12z?authuser=0&entry=ttu" target="_blank">
                <div className="location__icon">
                    <img src="./images/locationsection/location-icon.svg" alt="location-icon"/>
                </div>
                <div className="location__info">
                    <Paragraph addClasses="location__city">{city}, {country}</Paragraph>
                    <div className="location__address">{address}</div>
                </div>
            </Link>
        </li>
    )
}

export default LocationLink;