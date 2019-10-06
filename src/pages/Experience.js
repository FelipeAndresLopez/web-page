import React from "react";

import Timeline from "../components/Timeline.js";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          id: "1",
          date: "2015 - 2019",
          company: "Sinova",
          title: "Full stack developer",
          description:
            "Development and design of web applications with Google Apps Script, using Google Services as Gmail, Drive, Sheets and Docs, for automating workflows.",
          align: "left"
        },
        {
          id: "2",
          date: "2017",
          company: "Cocrealab",
          title: "Full stack developer",
          description:
            "Development and design of a web application, for visualizing the higher coverage of education in Colombia, by city and region.",
          align: "right"
        },
        {
          id: "3",
          date: "2015",
          company: "Eforcers",
          title: "Full stack developer",
          description:
            "Development and deployment of a file manager plug-in for an internal social network of Grupo de Diarios de América.",
          align: "left"
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
                  <h3>
                    <span className="marks">"</span>Do Your Best Work Ever
                    <span className="marks">"</span>
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <div className="timeline">
                    {this.state.experiences.map(experience => {
                      return (
                        <Timeline
                          key={experience.id}
                          align={experience.align}
                          date={experience.date}
                          company={experience.company}
                          title={experience.title}
                          description={experience.description}
                        ></Timeline>
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
