import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const SkillCard = ({ skillName }) => (
  <div className="skill__container">
    <p className="skill__name">{skillName}</p>
  </div>
);

SkillCard.propTypes = {
  skillName: PropTypes.string
};
