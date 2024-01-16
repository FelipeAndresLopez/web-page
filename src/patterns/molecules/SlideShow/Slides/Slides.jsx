import React from 'react';
import PropTypes from 'prop-types';

import { Slide } from '../Slide/Slide.jsx';
import './Slides.css';

const Slides = ({ images, currentSlideIndex }) => (
  <>
    {images.map((image, index) => (
      <Slide key={image.id} image={image} isActive={currentSlideIndex === index} />
    ))}
  </>
);

Slides.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  currentSlideIndex: PropTypes.number
};

export { Slides };
