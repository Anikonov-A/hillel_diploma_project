import './Span.scss'
import { string } from 'prop-types';

function Span (props) {
    return (
        <span data-aos={props.anim} className={`span-desc ${props.addClasses || ""}`}>{props.children}</span>
    )
}

Span.propTypes = {
    children: string.isRequired,
    addClasses: string,
    anim: string
}

export default Span;