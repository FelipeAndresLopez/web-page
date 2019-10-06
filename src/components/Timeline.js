import React from "react";

import "./css/Timeline.css";

function Timeline(props) {
  return (
    <React.Fragment>
      <div className={`event-container ${props.align}`}>
        <div className="content">
          <h5>{props.date}</h5>
          <h4>{props.company}</h4>
          <p className="job-title">{props.title}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Timeline;
