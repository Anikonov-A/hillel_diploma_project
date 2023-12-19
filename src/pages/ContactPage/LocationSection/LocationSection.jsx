import './LocationSection.scss';
import Span from '../../../components/Span/Span';
import Title from '../../../components/Title/Title';
import Paragraph from '../../../components/Paragraph/Paragraph';
import LocationList from './LocationList/LocationList';
function LocationSection () {
    return (
        <section className="location">
            <div className="container" data-aos="fade-up">
                <div className="location__content">
                    <Span addClasses="location__span">Location</Span>
                    <Title addClasses="location__title" size={2}>Our Farms</Title>
                    <Paragraph addClasses="location__desc">
                        Established fact that a reader will be distracted by the readable content of a page
                        when looking a layout. The point of using.
                    </Paragraph>
                    <LocationList />
                </div>
            </div>
        </section>
    )
}

export default LocationSection;