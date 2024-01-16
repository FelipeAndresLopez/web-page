import React from 'react';
import './SingleCard.css';

import { string } from 'prop-types';

export const SingleCard = ({ src, alt, caption }) => (
  <div className="single-card__container">
    <img
      className="single-card__image"
      src={src}
      alt={alt}
    />
    <p className="single-card__caption">{caption}</p>
  </div>
);

SingleCard.propTypes = {
  src: string,
  alt: string,
  caption: string
};
