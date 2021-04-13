import React from 'react';

import { node } from 'prop-types';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: node
};

export default Layout;
