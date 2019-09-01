import React from "react";
import { NavLink } from "react-router-dom";

import "./css/Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  hideMenu = () => {
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn.checked === true) {
      menuBtn.checked = false;
    }
  };
  componentWillUnmount() {
    document.addEventListener("click", this.hideMenu);
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <nav className="menu">
            <ul>
              <li>
                <NavLink
                  to="/"
                  activeClassName={"active"}
                  exact={true}
                  onClick={this.hideMenu}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  activeClassName={"active"}
                  onClick={this.hideMenu}
                >
                  SKILLS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  activeClassName={"active"}
                  onClick={this.hideMenu}
                >
                  EXPERIENCE
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  activeClassName={"active"}
                  onClick={this.hideMenu}
                >
                  EDUCATION
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  activeClassName={"active"}
                  onClick={this.hideMenu}
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  activeClassName={"active"}
                  onClick={this.hideMenu}
                >
                  BLOG
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
