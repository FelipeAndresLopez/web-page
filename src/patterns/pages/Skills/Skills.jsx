import React from 'react';

import skills from '@api/skills.json';
import { SkillCard } from '@patterns/molecules/SkillCard/SkillCard.jsx';
import { SecondaryTitle } from '@patterns/atoms/SecondaryTitle/SecondaryTitle.jsx';

const Skills = () => (
  <>
    <div id="skills" className="bkg-img bkg-2 full-page">
      <div className="bkg-rec full-page">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 center-xs">
              <SecondaryTitle titleFirstPart="Tech" titleSecondPart="Skills" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-xs col-md-6 col-md-offset-3">
              {skills.data.devSkills.map((skill) => (
                <SkillCard key={skill.id} skillName={skill.name} />
              ))}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xs-12 center-xs">
              <SecondaryTitle titleFirstPart="Soft" titleSecondPart="Skills" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-xs col-md-6 col-md-offset-3">
              {skills.data.softSkills.map((skill) => (
                <SkillCard key={skill.id} skillName={skill.name} />
              ))}
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </>
);

export default Skills;
