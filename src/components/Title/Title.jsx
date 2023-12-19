import './Title.scss'
import { string, number } from 'prop-types';

function Title(props) {
    const { size, addClasses } = props;
    const TitleComponent = `h${size}`;
    return (
        <TitleComponent className={`title title-${size} ${addClasses || ""}`} data-aos={props.anim}>{props.children}</TitleComponent>
    );
}

Title.propTypes = {
    size: number,
    addClasses: string,
    anim: string
}

export default Title;