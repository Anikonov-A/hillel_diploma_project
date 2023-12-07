import './StoreServicesBlock.scss';
import Title from '../../../../components/Title/Title';
import Paragraph from '../../../../components/Paragraph/Paragraph';
function StoreServicesBlock ({titleText, paragraphText, background, addClasses}) {
    return (
        <div className={`store__services-block ${addClasses || ""}`}>
            <div className={background}></div>
            <div className="store__services-block-content">
                <Title size={6} addClasses="store__services-block-title">
                    {titleText}
                </Title>
                <Paragraph addClasses="store__services-block-desc">
                    {paragraphText}
                </Paragraph>
            </div>
        </div>
    )
}

export default StoreServicesBlock;