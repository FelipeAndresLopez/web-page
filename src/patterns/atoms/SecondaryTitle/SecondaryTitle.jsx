import React from 'react';
import { string } from 'prop-types';

export const SecondaryTitle = ({ titleFirstPart, titleSecondPart = '' }) => (
  <h2>
    <span className="text">{titleFirstPart}</span>
    &nbsp;
    {titleSecondPart}
  </h2>
);

SecondaryTitle.propTypes = {
  titleFirstPart: string.isRequired,
  titleSecondPart: string
};
