import React from 'react';
import PropTypes from 'prop-types';

import './Dots.css';

const Dots = ({ items, currentSlideIndex }) => (
  <div className="row">
    <div className="col-xs-12">
      <div className="dots-container">
        {items.map((item, index) => (
          <span
            key={item.id}
            className={`dot ${currentSlideIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  </div>
);

Dots.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  currentSlideIndex: PropTypes.number
};

export { Dots };
