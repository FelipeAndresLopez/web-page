import React from 'react';

import Skillbar from '@patterns/molecules/SkillBar/Skillbar';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devSkills: [
        { id: '1', name: 'Html', percent: '80' },
        { id: '2', name: 'Js', percent: '70' },
        { id: '3', name: 'Css', percent: '70' },
        { id: '4', name: 'React js', percent: '70' },
        { id: '5', name: 'Mysql', percent: '70' },
        { id: '6', name: 'Redux', percent: '70' },
        { id: '7', name: 'Git', percent: '60' },
        { id: '8', name: 'Scrum', percent: '80' },
        { id: '9', name: 'Google Apis', percent: '70' }
      ],
      desSkills: [
        { id: '1', name: 'Adobe Xd', percent: '60' },
        { id: '2', name: 'Photoshop', percent: '30' },
        { id: '3', name: 'Illustrator', percent: '30' }
      ],
      softSkills: [
        { id: '1', name: 'Teamwork', percent: '80' },
        { id: '2', name: 'Leadership', percent: '80' },
        { id: '3', name: 'Commitment', percent: '100' },
        { id: '4', name: 'Communication', percent: '80' },
        { id: '5', name: 'Empathy', percent: '100' }
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
                  {this.state.devSkills.map((skill) => {
                    return <Skillbar key={skill.id} name={skill.name} percent={skill.percent}></Skillbar>;
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
                  {this.state.desSkills.map((skill) => {
                    return <Skillbar key={skill.id} name={skill.name} percent={skill.percent}></Skillbar>;
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
                  {this.state.softSkills.map((skill) => {
                    return <Skillbar key={skill.id} name={skill.name} percent={skill.percent}></Skillbar>;
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
