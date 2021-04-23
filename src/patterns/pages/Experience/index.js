import React from 'react';

import Timeline from '../../molecules/TimeLine/Timeline.js';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          id: '0',
          date: 'dec. 2019 - continue',
          company: 'TempEdge',
          title: 'React developer (Remote)',
          description: 'Development of components for applications using technologies such as React Js, Redux, Css, Html, Bootstrap and API REST.',
          align: 'right'
        },
        {
          id: '1',
          date: 'nov. 2015 - apr. 2019',
          company: 'Sinova',
          title: 'Full stack developer',
          description:
            'Development and design of web applications and plugins, using technologies such as Apps Script, Javascript, Css, Html, jQuery, MySQL and Bootstrap; for automating workflows.',
          align: 'left'
        },
        {
          id: '2',
          date: 'feb. 2017 - aug. 2017',
          company: 'Cocrealab',
          title: 'Full stack developer',
          description: 'Development and design of a web application, for visualizing the coverage of higher education in Colombia, by city and region.',
          align: 'right'
        },
        {
          id: '3',
          date: 'aug. 2015 - oct. 2015',
          company: 'Eforcers',
          title: 'Full stack developer',
          description: 'Development and deployment of a file manager plug-in for an internal social network of Grupo de Diarios de América.',
          align: 'left'
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
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
                    <span className="marks">"</span>Do Your Best Work Ever
                    <span className="marks">"</span>
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <div className="timeline">
                    {this.state.experiences.map((experience) => {
                      return (
                        <Timeline
                          key={experience.id}
                          align={experience.align}
                          date={experience.date}
                          company={experience.company}
                          title={experience.title}
                          description={experience.description}></Timeline>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Experience;
