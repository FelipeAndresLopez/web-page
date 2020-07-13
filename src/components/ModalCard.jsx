import React from 'react';
import '../assets/styles/components/SingleCard.css';


const ModalCard = ({ id, src, alt, onClick }) => (
  <div
    key={id}
    className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
    onClick={(e) => onClick(e)}
  >
    <img
      className="design-portfolio-image"
      src={src}
      alt={alt}
    />
  </div>
);

export default ModalCard;
