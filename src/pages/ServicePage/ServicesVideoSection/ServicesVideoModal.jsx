import React from 'react';
import './ServicesVideoModal.scss';

const ServicesVideoModal = ({ showVideo, onClose }) => {
  if (!showVideo) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content1">
        <span className="close-icon" onClick={onClose}>✖</span>
        <iframe
          className="video-frame"
          src="https://www.youtube.com/embed/GhIZWhJtY8w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ServicesVideoModal;