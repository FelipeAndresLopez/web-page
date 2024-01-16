import React from 'react';
import PropTypes from 'prop-types';

import './Slide.css';

const Slide = ({
  image = {},
  isActive = false
}) => {
  const { id = '0', src = '', desc = '' } = image;
  return (
    <div className={`slide fade ${isActive ? 'active' : ''}`} key={id}>
      <img src={src} alt={desc} />
      <div className="slide-caption">{desc}</div>
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.shape({}),
  isActive: PropTypes.bool
};

export { Slide };
