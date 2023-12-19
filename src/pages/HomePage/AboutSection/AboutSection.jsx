import './AboutSection.scss';
import { About } from "@/components/About/About";
import { AboutImgBlock } from "@/components/About/About";
import img1 from "./about-section-icon1.png";
import img2 from "./about-section-icon2.png";

export default function AboutSection() {
    const spanTitle = 'About Us'
    const title = 'We Believe in Working Accredited Farmers'
    const pText1 = 'Simply dummy text of the printing and ' +
        'typesetting industry. Lorem had ceased to een the industry`s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley'

    const imgBlock1 = <AboutImgBlock className = 'blockImg' img = {img1} title = 'Organic Foods Only'
                                     paragraph = 'Simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum'/>
    const imgBlock2 = <AboutImgBlock className = 'blockImg' img = {img2} title = 'Quality Standards'
                                     paragraph = 'Simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum'/>
    const buttonText = 'Shop Now'

    return (
       <div>
           <About addClasses='bgGrey' className='aboutSection1' spanTitle={spanTitle} title = {title} pText1 = {pText1}
                   id = 'containerVertical' imgBlock1 = {imgBlock1} imgBlock2 = {imgBlock2}
                  buttonText = {buttonText}/>
       </div>
    )
}