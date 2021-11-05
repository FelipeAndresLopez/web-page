import React from 'react';
import { node } from 'prop-types';

export const PrimaryTitle = ({ children }) => (
  <h1>
    {children}
  </h1>
);

PrimaryTitle.propTypes = {
  children: node.isRequired
};
