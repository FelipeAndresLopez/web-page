import React from 'react';

import skills from '@api/skills.json';
import { SkillCard } from '@patterns/molecules/SkillCard/index.jsx';

const Skills = () => (
  <>
    <div id="skills" className="bkg-img bkg-2 full-page">
      <div className="bkg-rec full-page">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 center-xs">
              <h1>
                <span className="text">Tech</span>
                &nbsp;skills
              </h1>
            </div>
          </div>
          <div className="row skills-container">
            <div className="col-xs-12 center-xs col-md-6 col-md-offset-3">
              {skills.data.devSkills.map((skill) => (
                <SkillCard key={skill.id} skillName={skill.name} />
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
            <div className="col-xs-12 center-xs col-md-6 col-md-offset-3">
              {skills.data.softSkills.map((skill) => (
                <SkillCard key={skill.id} skillName={skill.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Skills;
