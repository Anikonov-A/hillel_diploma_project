import React, { useState } from 'react';
import Title from '@/components/Title/Title';
import Paragraph from '../../../components/Paragraph/Paragraph';
import Span from "@/components/Span/Span";
import './ServicesVideoSection.scss';
import ServicesVideoModal from './ServicesVideoModal';

const ServicesVideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideoClick = () => {
    setShowVideo(true);
  };
  const handleCloseModal = () => {
    setShowVideo(false);
  };

  return (
    <div className="services-video-section">
      <div className="container svs-container">

        <div>

          <Span addClasses="spanMb"> Organick Only</Span>

          <div>
            <Title size={2}>Everyday Fresh &amp; Clean</Title>
          </div>

          <Paragraph addClasses="sectionVSdesc">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the
          </Paragraph>

        </div>

        <div className='svs_button-wrapper'>

          <button type='button' onClick={handleVideoClick}>
            <div>
              <img
                className='svs_img'
                src="/images/ServicePage/video_icon.svg"
                loading="lazy"
                alt=""
              />
            </div>
          </button>

          <ServicesVideoModal showVideo={showVideo} onClose={handleCloseModal} />

        </div>
      </div>
    </div>
  );
};

export default ServicesVideoSection;