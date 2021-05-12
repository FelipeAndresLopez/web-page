import React from 'react';

import SkillBar from '@patterns/molecules/SkillBar/index.jsx';
import skills from '@api/skills.json';

const Skills = () => (
  <>
    <div id="skills" className="bkg-img bkg-2 full-page">
      <div className="bkg-rec full-page">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 center-xs">
              <h1>
                <span className="text">Development</span>
                &nbsp;skills
              </h1>
            </div>
          </div>
          <div className="row skills-container">
            <div className="col-xs-12 center-xs">
              {skills.data.devSkills.map((skill) => (
                <SkillBar key={skill.id} name={skill.name} percent={skill.percent} />
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 center-xs">
              <h1>
                <span className="text">Design</span>
                &nbsp;skills
              </h1>
            </div>
          </div>
          <div className="row skills-container">
            <div className="col-xs-12 center-xs">
              {skills.data.desSkills.map((skill) => (
                <SkillBar key={skill.id} name={skill.name} percent={skill.percent} />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-xs">
              <h1>
                <span className="text">Soft</span>
                &nbsp;skills
              </h1>
            </div>
          </div>
          <div className="row skills-container">
            <div className="col-xs-12 center-xs">
              {skills.data.softSkills.map((skill) => (
                <SkillBar key={skill.id} name={skill.name} percent={skill.percent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Skills;
