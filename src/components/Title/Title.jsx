import './Title.scss'
import { string, number } from 'prop-types';

function Title(props) {
    const { size, addClasses } = props;
    const TitleComponent = `h${size}`;
    return (
        <TitleComponent className={`title title-${size} ${addClasses || ""}`}>{props.children}</TitleComponent>
    );
}

Title.propTypes = {
    size: number.isRequired,
    children: string.isRequired,
    addClasses: string
}

export default Title;