import React from 'react';
import Title from '@/components/Title/Title';
import Span from "@/components/Span/Span";
import Paragraph from '@/components/Paragraph/Paragraph';
import AboutCards from './AboutCards';
import './ChooseUsSection.scss';

const ChooseUsSection = () => {
  const cardsData = [
    {
      cardNumber: 1,
      title: 'Return Policy',
      description: 'Simply dummy text of the printing and typesetting industry.',
      imagePath: '/images/ChooseUs/cards-icons/1.svg',
    },
    {
      cardNumber: 2,
      title: '100% Fresh',
      description: 'Simply dummy text of the printing and typesetting industry.',
      imagePath: '/images/ChooseUs/cards-icons/2.svg',
    },
    {
      cardNumber: 3,
      title: 'Support 24/7',
      description: 'Simply dummy text of the printing and typesetting industry.',
      imagePath: '/images/ChooseUs/cards-icons/3.svg',
    },
    {
      cardNumber: 4,
      title: 'Secured Payment',
      description: 'Simply dummy text of the printing and typesetting industry.',
      imagePath: '/images/ChooseUs/cards-icons/4.svg',
    },
  ];

  return (
    <section className="ChooseUsSection">
      <div className="container con">

        <div className="mybenefits-container">
          <div className="mybenefits">

            <Span addClasses="spanMb" anim="fade-up">
              Why Choose us?
            </Span>

            <div>
              <Title size={2} anim="fade-up" >We do not buy from the <br />
                open market & traders.</Title>
            </div>

            <Paragraph addClasses="footer__socials-desc" anim="fade-up">
              Simply dummy text of the printing and typesetting industry.
              Lorem had ceased to been the industry's standard  the 1500s, when an unknown
            </Paragraph>

            <div className="points-block">
              <Paragraph addClasses="point-wrapper" anim="fade-up">
                100% Natural Product
              </Paragraph>
              <Paragraph addClasses="point" anim="fade-up">
                Simply dummy text of the printing and typesetting industry Lorem Ipsum
              </Paragraph>
              <Paragraph addClasses="point-wrapper" anim="fade-up">
                Increases resistance
              </Paragraph>
              <Paragraph addClasses="point" anim="fade-up">
                Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
              </Paragraph>
            </div>

          </div>

          <div className="myimg-wrapper"></div>
        </div>

        <ul className="about-cards">
          {cardsData.map((card, index) => (
            <AboutCards
              key={index}
              cardNumber={card.cardNumber}
              title={card.title}
              description={card.description}
              imagePath={card.imagePath}
              anim="fade-up"
            />
          ))}
        </ul>
      </div>

    </section>
  );
};

export default ChooseUsSection;
