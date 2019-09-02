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
                  <div className="h2-cnt">
                    <h2>
                      <span>Development</span> skills
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 center-xs">
                  {this.state.devSkills.map(skill => {
                    return (
                      <div className="row skill-container" key={skill.id}>
                        <div className="col-xs-2 end-xs">
                          <label className="skill-name">{skill.name}</label>
                        </div>
                        <div className="col-xs-8">
                          <div className="progressbar-border">
                            <div
                              className="progressbar-fill"
                              style={{ width: `${skill.percent}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="col-xs-2 start-xs">
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
