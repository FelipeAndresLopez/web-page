import React from "react";

import "./css/Skillbar.css";

function Skillbar(props) {
  return (
    <React.Fragment>
      <div className="row skill-container">
        <div className="col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2 col-sm-12 col-xs-12 start-sm start-xs end-lg end-md">
          <label className="skill-name">{props.name}</label>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-11 col-xs-10">
          <div className="progressbar-border">
            <div className={`progressbar-fill filling-${props.percent}`}></div>
          </div>
        </div>

        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 start-lg start-md center-xs ">
          <label className="skill-percent">{props.percent}%</label>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skillbar;
