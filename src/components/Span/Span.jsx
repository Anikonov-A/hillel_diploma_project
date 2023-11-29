import './Span.scss'
import { string } from 'prop-types';

function Span (props) {
    return (
        <span className={`span-desc ${props.addClasses || ""}`}>{props.children}</span>
    )
}

Span.propTypes = {
    children: string.isRequired,
    addClasses: string
}

export default Span;