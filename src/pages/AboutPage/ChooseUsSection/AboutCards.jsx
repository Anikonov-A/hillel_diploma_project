import React from 'react';
import Title from '@/components/Title/Title';
import Paragraph from '../../../components/Paragraph/Paragraph';
import './ChooseUsSection.scss'

const AboutCards = ({ cardNumber, title, description, imagePath, anim }) => {
  return (
    <li className={`about-card card${cardNumber}`}>
      <div className="about-card_content" data-aos={anim}>
        <div className="card-wrapper" style={{ backgroundImage: `url(${imagePath})` }}></div>
        <Title size={6} addClasses="about-card_title">
          {title}
        </Title>
        <Paragraph addClasses="about-card_desc">{description}</Paragraph>
      </div>
    </li>
  );
};

export default AboutCards;