import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dots } from './Dots/Dots.jsx';
import { Slides } from './Slides/Slides.jsx';

import './Slideshow.css';
import { SlideButton } from './NavigationButton/SlideButton.jsx';

const Slideshow = ({ images = [] }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const lastImageIndex = images.length - 1;

  function nextSlide() {
    if (lastImageIndex === currentSlideIndex) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(lastImageIndex);
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div className="slideshow">
            <Slides images={images} currentSlideIndex={currentSlideIndex} />
            <SlideButton className="prev" handleClick={prevSlide} />
            <SlideButton className="next" handleClick={nextSlide} />
          </div>
          <Dots items={images} currentSlideIndex={currentSlideIndex} />
        </div>
      </div>
    </>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object)
};

export { Slideshow };
