import React from 'react';
import { Link } from 'react-router-dom';

import projects from '@api/projects.js';
import { PrimaryTitle } from '@patterns/atoms/PrimaryTitle/PrimaryTitle.jsx';
import { SingleCard } from '@patterns/molecules/SingleCard/SingleCard.jsx';

import './styles.css';

const Portfolio = () => (
  <>
    <div id="" className="bkg-img bkg-5 full-page">
      <div className="bkg-rec full-page">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 center-xs">
              <PrimaryTitle>Portfolio</PrimaryTitle>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 center-xs col-xs-offset-3">
              <h3 className="quotes small-quotes">
                <span className="marks">"</span>
                Your work is going to fill a
                large part of your life, and the only way to be truly
                satisfied is to do what you believe is great work. And the
                only way to do great work is to love what you do. If you
                haven’t found it yet, keep looking and don’t settle.
                <span className="marks">"</span>
                <p className="marks">Steve Jobs</p>
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 center-xs">
              <div className="row">
                <br />
                {projects.map((project) => (
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="linkUnstyled"
                  >
                    <SingleCard
                      src={project.thumbnail.image}
                      alt={project.alt}
                      caption={project.name}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Portfolio;
