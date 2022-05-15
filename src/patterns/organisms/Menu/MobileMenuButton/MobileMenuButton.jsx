/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import AppContext from '../../../../context/AppContext';

import './MobileMenuButton.css';

export const MobileMenuButton = () => {
  const { state, displayMobileMenu } = useContext(AppContext);
  return (
    <span className="mobile-menu-button">
      <input className="menu-btn" type="checkbox" id="menu-btn" value={state} onChange={() => displayMobileMenu()} />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>

    </span>
  );
};
