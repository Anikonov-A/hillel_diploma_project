import './WhoWeAreSection.scss';
import Span from "@/components/Span/Span";
import Title from "@/components/Title/Title";
import Paragraph from "@/components/Paragraph/Paragraph";

export default function WhoWeAre() {
    return (
        <section className='whoWeAreSection'>
            <div className="container">
               <div className='whoWeAreContentBlock'>
                    <Span addClasses="spanMb">
                        Eco Friendly
                    </Span>
                    <div>
                        <Title size={2} >Econis is a Friendly <br/>Organic Store</Title>
                        <div className='block'>
                            <Title size={6} >Start with Our Company First </Title>
                            <Paragraph>Sed ut perspiciatis unde omnis iste natus error
                                sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                            </Paragraph>
                        </div>
                        <div className='block'>
                            <Title size={6} >Learn How to Grow Yourself </Title>
                            <Paragraph>Sed ut perspiciatis unde omnis iste natus error
                                sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                            </Paragraph>
                        </div>
                        <div className='block'>
                            <Title size={6} >Farming Strategies of Today </Title>
                            <Paragraph>Sed ut perspiciatis unde omnis iste natus error
                                sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                            </Paragraph>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}