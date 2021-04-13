import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './css/Navbar.css';

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  const hideMenu = () => {
    opened && setOpened(false);
  };

  return (
    <>
      <header>
        <label className="menu-icon" htmlFor="menu-btn">
          <input className="menu-btn" type="checkbox" id="menu-btn" value={opened} onChange={hideMenu} />
          <span className="navicon" />
        </label>
        <nav className="menu">
          <ul>
            <li>
              <NavLink
                to="/"
                activeClassName="active"
                exact
                onClick={hideMenu}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                activeClassName="active"
                onClick={hideMenu}
              >
                SKILLS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                activeClassName="active"
                onClick={hideMenu}
              >
                EXPERIENCE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                activeClassName="active"
                onClick={hideMenu}
              >
                EDUCATION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                activeClassName="active"
                onClick={hideMenu}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                activeClassName="active"
                onClick={hideMenu}
              >
                BLOG
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
