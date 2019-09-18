import React from "react";
import "./css/Timeline.css";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          id: "1",
          year: "2015 - 2019",
          company: "Sinova",
          position: "Full stack developer",
          description:
            "Development and design of web applications with Google Apps Script, using Google Services as Gmail, Drive, Sheets and Docs, for automating workflows.",
          align: "left"
        },
        {
          id: "2",
          year: "2017",
          company: "Cocrealab",
          position: "Full stack developer",
          description:
            "Development and design of a web application, for visualizing the higher coverage of education in Colombia, by city and region.",
          align: "right"
        },
        {
          id: "3",
          year: "2015",
          company: "Eforcers",
          position: "Full stack developer",
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
                        <div
                          className={`event-container ${experience.align}`}
                          key={experience.id}
                        >
                          <div className="content">
                            <h5>{experience.year}</h5>
                            <h4>{experience.company}</h4>
                            <p className="job-title">{experience.position}</p>
                            <p>{experience.description}</p>
                          </div>
                        </div>
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
