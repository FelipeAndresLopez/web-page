import React from 'react';

import Timeline from '@patterns/molecules/TimeLine/index.jsx';
import SingleCard from '@patterns/molecules/SingleCard/SingleCard';
import titles from '@api/titles.json';
import certifications from '@api/certifications.js';

const Education = () => (
  <>
    <div id="education" className="bkg-img bkg-4 full-page">
      <div className="bkg-rec full-page">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 center-xs">
              <h1>Education</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-xs">
              <h3 className="quotes">
                <span className="marks">&quot;</span>
                Never Stop Learning
                <span className="marks">&quot;</span>
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <div className="timeline">
                {titles.data.map((title) => (
                  <Timeline
                    key={title.id}
                    align={title.align}
                    date={title.date}
                    company={title.company}
                    title={title.title}
                    description={title.description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-xs-12 center-xs">
              <h1>Certifications</h1>
            </div>
          </div>

          <div className="row">
            {certifications.data.map((certification) => (
              <div
                key={certification.id}
                className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
              >
                <SingleCard
                  src={certification.url}
                  alt={certification.course}
                  caption={certification.caption}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Education;
