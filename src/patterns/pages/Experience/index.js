import React from 'react';

import Timeline from '@patterns/molecules/TimeLine/index.jsx';
import experiences from '@api/experiences.json';

const Experience = () => (
  <>
    <div id="experience" className="bkg-img bkg-3 full-page">
      <div className="bkg-rec full-page">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 center-xs">
              <h1>Experience</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-xs">
              <h3 className="quotes">
                <span className="marks">"</span>
                Do Your Best Work Ever
                <span className="marks">"</span>
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <div className="timeline">
                {experiences.data.reverse().map((experience) => (
                  <Timeline
                    key={experience.id}
                    align={experience.align}
                    date={experience.date}
                    company={experience.company}
                    title={experience.title}
                    description={experience.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Experience;
