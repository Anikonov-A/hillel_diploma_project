import { About } from "@/components/About/About";
import { AboutImgBlock } from "@/components/About/About";
import img1 from "./about-us-section-icon1.png";
import img2 from "./about-us-section-icon2.png";

export default function AboutSection() {
    const spanTitle = 'About Us'
    const title = 'We do Creative Things for Success'
    const pText1 = 'Simply dummy text of the printing and ' +
        'typesetting industry. Lorem had ceased to een the industry`s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley'
    const pText2 = 'Simply dummy text of the printing and ' +
        'typesetting industry. Lorem had ceased to een the industry`s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley'

    const imgBlock1 = <AboutImgBlock className = 'blockImg' img = {img1} title = 'Modern Agriculture Equipment'/>
    const imgBlock2 = <AboutImgBlock className = 'blockImg' img = {img2} title = 'No growth hormones are used' />
    const buttonText = 'Explore More'

    return (
        <div>
            <About addClasses='bgWhite'  className='aboutSection2' spanTitle={spanTitle} title = {title} pText1 = {pText1} pText2 = {pText2}
                   id = 'containerHorizontal' imgBlock1 = {imgBlock1} imgBlock2 = {imgBlock2}
                   buttonText = {buttonText}/>
        </div>
    )
}