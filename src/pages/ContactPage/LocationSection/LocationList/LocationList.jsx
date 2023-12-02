import './LocationList.scss';
import {locations} from '../../../../common/locations';
import LocationLink from '../LocationLink/LocationLink';

function LocationList () {
    return (
        <ul className="location__list">
            {locations.map((location) => (
                <LocationLink
                    country={location.country}
                    key={location.address}
                    city={location.city}
                    address={location.address}
                />
            ))}
        </ul>
    )
}

export default LocationList;