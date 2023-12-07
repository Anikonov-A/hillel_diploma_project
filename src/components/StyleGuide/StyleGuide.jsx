import Title from "../Title/Title";
import {string} from "prop-types";
import "./StyleGuide.scss"

export default function StyleGuide({ titleText , backgroundClass }){
    return(
     <section className={`${backgroundClass} style_component_wrapper`}>
          <Title size={2}>{titleText}</Title>
     </section>
    )
}
StyleGuide.propTypes = {
    titleText:string.isRequired,
    backgroundClass:string.isRequired,
}