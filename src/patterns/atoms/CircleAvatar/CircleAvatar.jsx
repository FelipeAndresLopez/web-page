import React from 'react';
import { string } from 'prop-types';

import './styles.css';

export const CircleAvatar = ({ imageUrl }) => (
  <div className="photo-circle">
    <img src={imageUrl} alt="Felipe López" />
  </div>
);

CircleAvatar.propTypes = {
  imageUrl: string.isRequired
};
