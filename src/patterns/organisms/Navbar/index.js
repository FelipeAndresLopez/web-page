import React, { useContext } from 'react';
import { DesktopMenu } from '@patterns/organisms/Menu/DesktopMenu/DesktopMenu.jsx';
import { MobileMenu } from '@patterns/organisms/Menu/MobileMenu/MobileMenu';
import { MobileMenuButton } from '@patterns/organisms/Menu/MobileMenuButton/MobileMenuButton.jsx';
import AppContext from '../../../context/AppContext';

const Navbar = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <MobileMenuButton />
      {state.mobileMenu ? <MobileMenu /> : <DesktopMenu />}
    </>
  );
};

export default Navbar;
