import './AddInfoPoint.scss';
import Title from '../../../../components/Title/Title';
function AddInfoPoint ({number, text}) {
    return (
        <div className="store__services-addInfo-point">
            <div className="store__services-addInfo-number">{number}</div>
            <Title size={6} addClasses="store__services-addInfo-text">{text}</Title>
        </div>
    )
}

export default AddInfoPoint;