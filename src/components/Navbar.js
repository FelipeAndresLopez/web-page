import React from "react";
import { NavLink } from "react-router-dom";

import "./css/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName={"active"} exact={true}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName={"active"}>
                SKILLS
              </NavLink>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
