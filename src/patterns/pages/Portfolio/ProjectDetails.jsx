import React from 'react';
import { Link, useParams } from 'react-router-dom';
import NotFound from '@patterns/pages/NotFound/NotFound.jsx';
import Slideshow from '@patterns/molecules/SlideShow/Slideshow';
import projects from '@api/projects.js';

const ProjectDetails = () => {
  // Get id from url
  const { projectId } = useParams();
  const projectData = projects[projectId - 1];

  if (projectData) {
    return (
      <>
        <div id="" className="bkg-img bkg-5 full-page">
          <div className="bkg-rec full-page">
            <div className="main-content">
              <div className="row">
                <Link className="left-arrow" to="/portfolio">
                  <i />
                </Link>
                <div className="col-xs-12 center-xs">
                  <h2>{projectData.name}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <Slideshow images={projectData.images} />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <h4>DESCRIPTION</h4>
                  <p>{projectData.description}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <h4>SPECS</h4>
                  <ul className="blue-bullets">
                    {projectData.specs.map((spec) => (<li key={spec.id}>{spec.name}</li>))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <NotFound />;
};

export default ProjectDetails;
