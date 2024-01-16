import React from 'react';
import PropTypes from 'prop-types';

import './SlideButton.css';

const SlideButton = ({ className = '', handleClick = () => {} }) => (
  <button type="button" className={`slide-button ${className}`} onClick={handleClick} aria-label="slide button" />
);

SlideButton.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func
};

export { SlideButton };
