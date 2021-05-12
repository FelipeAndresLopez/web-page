import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

import ModalImage from '../../molecules/ModalImage/ModalImage.js';
import ModalCard from '../../molecules/ModalCard/ModalCard';

import '@patterns/atoms/ReactTabs/ReactTabs.css';
import './styles.css';

import cocrealab1 from '@assets/images/portfolio/design/cocrealab-1.jpg';
import cocrealab2 from '@assets/images/portfolio/design/cocrealab-2.jpg';
import cocrealab3 from '@assets/images/portfolio/design/cocrealab-3.jpg';

import philipsAdventure from '@assets/images/portfolio/development/philips-adventure/game-done.jpg';
import fileManager from '@assets/images/portfolio/development/file-manager/fm-1.jpg';
import cocrealabApp from '@assets/images/portfolio/development/cocrealab/cocrealab-0.png';
import SingleCard from '@patterns/molecules/SingleCard/SingleCard';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImageIsOpen: false,
      imageSrc: "",
      imageAlt: "",
      desProjects: [
        {
          id: "1",
          src: cocrealab1,
          alt: "Cocrealab 1"
        },

        {
          id: "2",
          src: cocrealab2,
          alt: "Cocrealab 2"
        },

        {
          id: "3",
          src: cocrealab3,
          alt: "Cocrealab 3"
        }
      ],
      devProjects: [
        {
          id: "1",
          src: philipsAdventure,
          alt: "Philip's Adventure",
          name: "Philip's Adventure"
        },

        {
          id: "2",
          src: fileManager,
          alt: "File manager on Hum-Hub",
          name: "Web plug-in"
        },

        {
          id: "3",
          src: cocrealabApp,
          alt: "Cocrealab",
          name: "Web application"
        }
      ]
    };
  }

  handleOpenModal = e => {
    this.setState({
      modalImageIsOpen: true,
      imageSrc: e.target.src,
      imageAlt: e.target.alt
    });
  };

  render() {
    return (
      <React.Fragment>
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
                    <span className="marks">"</span>Your work is going to fill a
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
                      <Tab>Development</Tab>
                      <Tab>Design</Tab>
                    </TabList>
                    <TabPanel>
                      <p>Development of applications</p>
                      <div className="row">
                        {this.state.devProjects.map(devProject => {
                          return (
                            <div
                              key={devProject.id}
                              className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
                            >
                              <Link
                                to={`/portfolio/${devProject.id}`}
                                className="linkUnstyled"
                              >
                                <SingleCard
                                  src={devProject.src}
                                  alt={devProject.alt}
                                  caption={devProject.name}
                                />
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <p>Design of applications</p>
                      <div className="row">
                        {this.state.desProjects.map(designProject => {
                          return (
                            <ModalCard
                              key={designProject.id}
                              src={designProject.src}
                              alt={designProject.alt}
                              onClick={this.handleOpenModal}
                            />
                          );
                        })}
                      </div>
                      <ModalImage
                        isOpen={this.state.modalImageIsOpen}
                        imageSrc={this.state.imageSrc}
                        imageAlt={this.state.imageAlt}
                      ></ModalImage>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
