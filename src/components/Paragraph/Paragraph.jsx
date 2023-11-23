import './Paragraph.scss';
import { string } from 'prop-types';


function Paragraph(props) {
    return <p className={ `desc ${ props.addClasses || '' }` }>{props.children}</p>;
}

Paragraph.propTypes = {
    addClasses: string
};

export default Paragraph;