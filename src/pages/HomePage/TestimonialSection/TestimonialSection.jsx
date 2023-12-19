import Span from "@/components/Span/Span";
import Title from "@/components/Title/Title";
import Paragraph from "@/components/Paragraph/Paragraph";
import {Pagination, Autoplay} from "swiper/modules";
import { Swiper, SwiperSlide} from "swiper/react";
import { testimonials } from './testimonials';
import img from './testimonial-avatar.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TestimonialSection.scss'

const counters = [
    {
        id: 1,
        title: '100%',
        text: 'Organic'
    },
    {
        id: 2,
        title: '285',
        text: 'Active Product'
    },
    {
        id: 3,
        title: '350+',
        text: 'Organic Orchads'
    },
    {
        id: 4,
        title: '25+',
        text: 'Years of Farming'
    }
]
const CounterElement = ({titleText, paragraphText}) => {
    return (
        <div className='counter-element' data-aos="fade-up">
            <Title size={2}>{titleText}</Title>
            <Paragraph>{paragraphText}</Paragraph>
        </div>
    )
}

export default function Slider() {

    return (
       <section className='testimonial-wrapper'>
           <div>
               <Span addClasses="spanMb" anim="fade-up">Testimonial</Span>
               <Title size={2} anim="fade-up">What Our Customer Saying?</Title>
               <Swiper
                   loop={true}
                   spaceBetween={30}
                   centeredSlides={true}
                   autoplay={{
                       delay: 3500,
                       disableOnInteraction: false,
                   }}
                   pagination={{
                       clickable: true,
                   }}
                   modules={[Autoplay, Pagination]}
                   className="mySwiper">

                   {testimonials.map((testimonial) => (
                       <SwiperSlide  key = {testimonial.id} >
                           <div data-aos="fade-up">
                               <img className='slider-img' src={testimonial.photo || img} alt={testimonial.name}/>
                           </div>
                           <Paragraph anim="fade-up">{testimonial.text}</Paragraph>
                          <div>
                              <Title size={6} anim="fade-up"> {testimonial.author}</Title>
                              <div data-aos="fade-up">{testimonial.trade}</div>
                          </div>
                       </SwiperSlide>
                   ))}
               </Swiper>
           </div>
           <div className='line' data-aos="fade-up"></div>
           <div className='counters'>
               {counters.map((counter) => (
                   <CounterElement key={counter.id} titleText= {counter.title} paragraphText={counter.text}/>
               ))}
           </div>
       </section>
    )
}
