import React from 'react';
import { string, number, func } from 'prop-types';
// import '../assets/styles/components/SingleCard.css';

const ModalCard = ({
  id,
  src,
  alt,
  onClick
}) => (
  <button
    type="button"
    key={id}
    className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
    onClick={(e) => onClick(e)}
  >
    <img
      className="design-portfolio-image"
      src={src}
      alt={alt}
    />
  </button>
);

ModalCard.propTypes = {
  id: number,
  src: string,
  alt: string,
  onClick: func
};

export default ModalCard;
