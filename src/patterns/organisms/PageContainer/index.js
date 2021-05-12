import React from 'react';
import { node } from 'prop-types';

export const PageContainer = ({ children }) => (
  <div className="bkg-img bkg-1 full-page">
    <div className="bkg-rec full-page">
      <div className="main-content">
        {children}
      </div>
    </div>
  </div>
);

PageContainer.propTypes = {
  children: node
};
