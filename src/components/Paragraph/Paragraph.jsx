import './Paragraph.scss';
import { string } from 'prop-types';


function Paragraph(props) {
    return <p className={ `desc ${ props.addClasses || '' }` } data-aos={props.anim}>{props.children}</p>;
}

Paragraph.propTypes = {
    addClasses: string,
    anim: string
};

export default Paragraph;