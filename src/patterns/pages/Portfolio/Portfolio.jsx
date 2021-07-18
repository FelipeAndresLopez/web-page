import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel
} from 'react-tabs';
import { Link } from 'react-router-dom';

import '@patterns/atoms/ReactTabs/ReactTabs.css';
import './styles.css';

import projects from '@api/projects.js';
import SingleCard from '@patterns/molecules/SingleCard/SingleCard';

const Portfolio = () => (
  <>
    <div id="" className="bkg-img bkg-5 full-page">
      <div className="bkg-rec full-page">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 center-xs">
              <h1>Portfolio</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center-xs">
              <h3 className="quotes small-quotes">
                <span className="marks">"</span>
                Your work is going to fill a
                large part of your life, and the only way to be truly
                satisfied is to do what you believe is great work. And the
                only way to do great work is to love what you do. If you
                haven’t found it yet, keep looking and don’t settle.
                <span className="marks">"</span>
              </h3>
              <h4 className="marks small">Steve Jobs</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 center-xs">
              <Tabs>
                <TabList>
                  <Tab>Web Apps</Tab>
                </TabList>
                <TabPanel>
                  <p>Development of applications</p>
                  <div className="row">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                      >
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
                      </div>
                    ))}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Portfolio;
