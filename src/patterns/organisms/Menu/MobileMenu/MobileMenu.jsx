import React from 'react';
import { MenuOptions } from '../MenuOptions';
import './MobileMenu.css';

export const MobileMenu = () => {
  const toggleMenu = () => {

  };

  return (
    <header className="mobile-menu">
      <nav>
        <MenuOptions toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};
