import React from 'react';
import Title from '@/components/Title/Title';
import Paragraph from '../../../components/Paragraph/Paragraph';
import './WhatWeGrow.scss'


const Points = ({ cardNumber, title, description, imagePath, className, anim }) => {
  return (
    <li className={`point-card card${cardNumber}`}>
      <div className={`point-card_content ${className}`} data-aos={anim}>
        <div className="point-card-wrapper" style={{ backgroundImage: `url(${imagePath})` }}></div>
        <Title size={6} addClasses="point-card_title">
          {title}
        </Title>
        <Paragraph addClasses="point-card_desc">{description}</Paragraph>
      </div>
    </li>
  );
};

export default Points;