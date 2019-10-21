import React from "react";

import Timeline from "../components/Timeline.js";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [
        {
          id: "1",
          date: "jun. 2019 - Continue",
          company: "Platzi",
          title: "Frontend developer",
          description: "Frontend developer and architect career.",
          align: "left"
        },
        {
          id: "2",
          date: "jul. 2018 - Continue",
          company: "Passport Language Centers",
          title: "English language",
          description: "English program intermediate and advanced (B1 - B2).",
          align: "right"
        },
        {
          id: "3",
          date: "feb. 2010 - oct. 2015",
          company: "Universidad de Cundinamarca",
          title: "Software engineer",
          description:
            "I finished my software engineering degree at this college. I completed successfully all the credits without any fallout.",
          align: "left"
        },
        {
          id: "4",
          date: "feb. 2014 - dec. 2015",
          company: "Escuela Nacional de Informática",
          title: "Computing technician",
          description:
            "There, I improved my programming skills and I got an honorary mention for my performance and commitment.",
          align: "right"
        },
        {
          id: "5",
          date: "jan. 2003 - dec. 2008",
          company: "Escuela Normal Superior",
          title: "High school diploma",
          description:
            "These kind of schools are focused on training teachers, however I decided to be an engineer.",
          align: "left"
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
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
                    <span className="marks">"</span>Never Stop Learning
                    <span className="marks">"</span>
                  </h3>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <div className="timeline">
                    {this.state.titles.map(title => {
                      return (
                        <Timeline
                          key={title.id}
                          align={title.align}
                          date={title.date}
                          company={title.company}
                          title={title.title}
                          description={title.description}
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

export default Education;
