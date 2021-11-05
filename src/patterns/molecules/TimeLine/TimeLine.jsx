import React from 'react';

import { string } from 'prop-types';
import './Timeline.css';

export const Timeline = ({
  align,
  date,
  company,
  title,
  description
}) => (
  <>
    <div className={`event-container ${align}`}>
      <div className="event-content">
        <h5>{date}</h5>
        <h4>{company}</h4>
        <p className="job-title">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  </>
);

Timeline.propTypes = {
  align: string,
  date: string,
  company: string,
  title: string,
  description: string
};
