import './ServiceSinglePage.scss';
import StyleGuide from '../../components/StyleGuide/StyleGuide';
import StoreServices from './StoreServices/StoreServices';
function ServiceSinglePage () {
    return (
        <main className="wrapper">
            <StyleGuide titleText="Quality Standart" backgroundClass="bg-services-single"/>
            <StoreServices />
        </main>
    )
}

export default ServiceSinglePage;