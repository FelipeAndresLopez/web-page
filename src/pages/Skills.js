import React from "react";
import "./css/Skills.css";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devSkills: [
        { id: "1", name: "Html", percent: "80" },
        { id: "2", name: "Js", percent: "60" },
        { id: "3", name: "Css", percent: "60" },
        { id: "4", name: "React js", percent: "40" },
        { id: "5", name: "Mysql", percent: "60" },
        { id: "6", name: "Php", percent: "40" },
        { id: "7", name: "Git", percent: "50" },
        { id: "8", name: "Scrum", percent: "80" },
        { id: "9", name: "Google Apis", percent: "60" }
      ],
      desSkills: [
        { id: "1", name: "Adobe Xd", percent: "60" },
        { id: "2", name: "Photoshop", percent: "30" },
        { id: "3", name: "Illustrator", percent: "30" }
      ],
      softSkills: [
        { id: "1", name: "Teamwork", percent: "80" },
        { id: "2", name: "Leadership", percent: "80" },
        { id: "3", name: "Commitment", percent: "100" },
        { id: "4", name: "Communication", percent: "80" },
        { id: "5", name: "Empathy", percent: "100" }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <div id="skills" className="bkg-img bkg-2 full-page">
          <div className="bkg-rec full-page">
            <div className="main-content">
              <div className="row">
                <div className="col-xs-12 center-xs">
                  <h1>
                    <span className="text">Development</span> skills
                  </h1>
                </div>
              </div>
              <div className="row skills-container">
                <div className="col-xs-12 center-xs">
                  {this.state.devSkills.map(skill => {
                    return (
                      <div className="row skill-container" key={skill.id}>
                        <div className="col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2 col-sm-12 col-xs-12 start-sm start-xs end-lg end-md">
                          <label className="skill-name">{skill.name}</label>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-11 col-xs-10">
                          <div className="progressbar-border">
                            <div
                              className={`progressbar-fill filling-${skill.percent}`}
                            ></div>
                          </div>
                        </div>

                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 start-lg start-md center-xs ">
                          <label className="skill-percent">
                            {skill.percent}%
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 center-xs">
                  <h1>
                    <span className="text">Design</span> skills
                  </h1>
                </div>
              </div>
              <div className="row skills-container">
                <div className="col-xs-12 center-xs">
                  {this.state.desSkills.map(skill => {
                    return (
                      <div className="row skill-container" key={skill.id}>
                        <div className="col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2 col-sm-12 col-xs-12 start-sm start-xs end-lg end-md">
                          <label className="skill-name">{skill.name}</label>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-11 col-xs-10">
                          <div className="progressbar-border">
                            <div
                              className={`progressbar-fill filling-${skill.percent}`}
                            ></div>
                          </div>
                        </div>

                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 start-lg start-md center-xs ">
                          <label className="skill-percent">
                            {skill.percent}%
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 center-xs">
                  <h1>
                    <span className="text">Soft</span> skills
                  </h1>
                </div>
              </div>
              <div className="row skills-container">
                <div className="col-xs-12 center-xs">
                  {this.state.softSkills.map(skill => {
                    return (
                      <div className="row skill-container" key={skill.id}>
                        <div className="col-lg-offset-1 col-md-offset-1 col-lg-2 col-md-2 col-sm-12 col-xs-12 start-sm start-xs end-lg end-md">
                          <label className="skill-name">{skill.name}</label>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-11 col-xs-10">
                          <div className="progressbar-border">
                            <div
                              className={`progressbar-fill filling-${skill.percent}`}
                            ></div>
                          </div>
                        </div>

                        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 start-lg start-md center-xs ">
                          <label className="skill-percent">
                            {skill.percent}%
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;
