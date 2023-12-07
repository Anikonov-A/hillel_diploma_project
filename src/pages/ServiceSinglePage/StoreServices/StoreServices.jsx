import './StoreServices.scss';
import Title from '../../../components/Title/Title';
import Paragraph from '../../../components/Paragraph/Paragraph';
import StoreServicesBlock from './StoreServicesBlock/StoreServicesBlock';
import AddInfoPoint from './AddInfoPoint/AddInfoPoint';
import {qualities} from '../../../common/qualities';
function StoreServices () {
    return (
        <section className="store__services">
            <div className="container">
                <div className="store__services-bg"></div>
                <div className="store__services-container">
                    <div className="store__services-info">
                        <div className="store__services-content">
                            <Title size={2} addClasses="store__services-title">
                                Organic Store Services
                            </Title>
                            <Paragraph addClasses="store__services-desc">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout.
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                                'Content here, content here', making it look like readable English.
                            </Paragraph>
                            <Paragraph addClasses="store__services-desc">
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                                text, and uncover many web sites still in their infancy. Various versions have evolved over the
                                years
                            </Paragraph>
                        </div>
                        <div className="store__services-wrapper">
                            <StoreServicesBlock
                                titleText="Why Organic?"
                                paragraphText="Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their ddefault model text, and auncover."
                                background="bg bg__service-one"/>
                            <StoreServicesBlock
                                titleText="Speciality Produce"
                                paragraphText="Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover."
                                background="bg bg__service-two"
                                addClasses="row-reverse"/>
                        </div>
                        <div className="store__services-addInfo">
                            <Title size={4} addClasses="store__services-addInfo-title">
                                We farm your land
                            </Title>
                            <Paragraph addClasses="store__services-addInfo-desc">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout.
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                making it look like readable English.
                            </Paragraph>
                            <div className="store__services-addInfo-points">
                                {qualities.map((item) => (
                                    <AddInfoPoint key={item.number} number={item.number} text={item.quality} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoreServices;