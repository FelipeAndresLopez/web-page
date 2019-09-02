import React from "react";
import { readdirSync } from "fs";

class Progressbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="progressbar-container">
          <div className="progressbar-filling"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Progressbar;
