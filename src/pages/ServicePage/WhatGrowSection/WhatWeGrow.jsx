import React from 'react';
import Title from '@/components/Title/Title';
import Span from "@/components/Span/Span";
import './WhatWeGrow.scss'
import Points from './Points';
import { NavButton } from "@/components/Buttons/Buttons";

function renderPoints(cardsData, className, isLeft) {
  return (
    <ul className={className}>
      {cardsData.map((card, index) => (
        <Points
          key={index}
          cardNumber={card.cardNumber}
          title={card.title}
          description={card.description}
          imagePath={card.imagePath}
          className={isLeft ? 'left-content point-card_content' : 'point-card_content'}
          anim="fade-up"
        />
      ))}
    </ul>
  );
}

const WhatWeGrowSection = () => {

  const pointsLeft = [
    {
      cardNumber: 1,
      title: 'Dairy Products',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.',
      imagePath: '/images/ServicePage/1.svg',
    },
    {
      cardNumber: 2,
      title: 'Store Services',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.',
      imagePath: '/images/ServicePage/2.svg',
    },
    {
      cardNumber: 3,
      title: 'Delivery Services',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.',
      imagePath: '/images/ServicePage/3.svg',
    },
  ];

  const pointsRight = [
    {
      cardNumber: 4,
      title: 'Agricultural Services',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.',
      imagePath: '/images/ServicePage/4.svg',
    },
    {
      cardNumber: 5,
      title: 'Organic Products',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.',
      imagePath: '/images/ServicePage/5.svg',
    },
    {
      cardNumber: 6,
      title: 'Fresh Vegetables',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis.',
      imagePath: '/images/ServicePage/6.svg',
    },
  ];


  return (
    <article className='WhatWeGrowSection'>
      <div className='container'>
        <section className='wwGrowHeading'>

          <Span addClasses="spanMb" > What we Grow </Span>

          <div>
            <Title size={2} >Better Agriculture for Better Future</Title>
          </div>

        </section>

        <section className='wwMain'>
          {renderPoints(pointsLeft, 'wwMain-left', true)}
          {renderPoints(pointsRight, 'wwMain-right', false)}
        </section>

        <div className='wwButton'>
          <NavButton to="/services/single" className="button green" text="Explore More" anim="fade-up"/>
        </div>

      </div>
    </article>
  )
}

export default WhatWeGrowSection