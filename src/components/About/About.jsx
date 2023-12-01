import './About.scss';
import Span from "@/components/Span/Span";
import Title from "@/components/Title/Title";
import Paragraph from "@/components/Paragraph/Paragraph";
import { NavButton } from "@/components/Buttons/Buttons";
import {string} from "prop-types";
import {object} from "prop-types";

export function AboutImgBlock ({ className, img, title, paragraph })  {
    return (
        <div className={className}>
            <img src={img} alt="icon"/>
            <div className='blockContent'>
                <Title size={6} addClasses='blockContentTitle'>{title} </Title>
                <Paragraph>{paragraph}
                </Paragraph>
            </div>
        </div>
    )
}

AboutImgBlock.propTypes = {
    className: string,
    img: string,
    title: string,
    paragraph: string,
}


export function About({addClasses, className, spanTitle, title, pText1, pText2, id, imgBlock1, imgBlock2, buttonText}) {
    return (
        <section className={`${addClasses || ""} aboutWrapper`}>
                <div className={className}></div>
                <div className='aboutContentBlock'>
                    <Span addClasses="spanMb">
                        {spanTitle}
                    </Span>
                    <Title size={2} >{title}< /Title>
                    <Paragraph addClasses='paragraph'>{pText1}</Paragraph>
                    <Paragraph addClasses='paragraph'>{pText2}</Paragraph>
                    <div id={id}>
                        <div>{imgBlock1}</div>
                        <div>{imgBlock2}</div>
                    </div>
                    <NavButton to="/products" className="button green" text={buttonText} />
                </div>
        </section>
    )
}

About.propTypes = {
    className: string,
    spanTitle:string,
    title: string,
    pText1: string,
    pText2: string,
    id: string,
    imgBlock1: object,
    imgBlock2: object,
    buttonText: string
}
