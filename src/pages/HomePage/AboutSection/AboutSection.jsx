import './AboutSection.scss';
import Span from "@/components/Span/Span";
import Title from "@/components/Title/Title";
import Paragraph from "@/components/Paragraph/Paragraph";
import img1 from "./about-section-icon1.png";
import img2 from "./about-section-icon2.png";
import { NavButton } from "@/components/Buttons/Buttons";

export default function About() {
    return (
        <section className='AboutSection'>
                <div className='AboutContentBlock'>
                    <Span addClasses="spanMb">
                        About Us
                    </Span>
                        <Title  className='title' size={2} >We Believe in Working<br/> Accredited Farmers </Title>
                        <Paragraph>Simply dummy text of the printing and typesetting industry.
                            Lorem had ceased to een the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley.
                        </Paragraph>
                    <div className="container">
                        <div className='block'>
                            <img src={img1} alt="icon"/>
                           <div className='blockContent'>
                               <Title size={6} addClasses='blockContentTitle'>Organic Foods Only </Title>
                               <Paragraph>Simply dummy text of the printing
                                   and typesetting industry. Lorem Ipsum
                               </Paragraph>
                           </div>
                        </div>
                        <div className='block'>
                            <img src={img2} alt="icon"/>
                            <div className='blockContent'>
                                <Title size={6} addClasses='blockContentTitle'>Quality Standards </Title>
                                <Paragraph>Simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                    <NavButton to="/shop" className="button green" text="Shop Now"/>
                </div>
        </section>
    )
}