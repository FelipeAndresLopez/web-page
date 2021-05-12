import React from 'react';

import './Timeline.css';

const Timeline = (props) => (
  <>
    <div className={`event-container ${props.align}`}>
      <div className="event-content">
        <h5>{props.date}</h5>
        <h4>{props.company}</h4>
        <p className="job-title">{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  </>
);

export default Timeline;
