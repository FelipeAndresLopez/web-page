import React from 'react';
import './SingleCard.css';

const SingleCard = ({ src, alt, caption }) => (
  <div className="single-card__container">
    <img
      className="single-card__image"
      src={src}
      alt={alt}
    />
    <p>{caption}</p>
  </div>
);

export default SingleCard;
