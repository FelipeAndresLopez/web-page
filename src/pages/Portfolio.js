import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import ModalImage from "../components/ModalImage.js";

import "./css/ReactTabs.css";

import "./css/Portfolio.css";

import cocrealab1 from "./images/design/cocrealab-1.jpg";
import cocrealab2 from "./images/design/cocrealab-2.jpg";
import cocrealab3 from "./images/design/cocrealab-3.jpg";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImageIsOpen: false,
      imageSrc: "",
      imageAlt: "",
      designImages: [
        {
          id: "1",
          src: cocrealab1,
          alt: "Proyecto Cocrealab 1"
        },

        {
          id: "2",
          src: cocrealab2,
          alt: "Proyecto Cocrealab 2"
        },

        {
          id: "3",
          src: cocrealab3,
          alt: "Proyecto Cocrealab 3"
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
        <div id="portfolio" className="bkg-img bkg-5 full-page">
          <div className="bkg-rec full-page">
            <div className="main-content">
              <div className="main-content">
                <div className="row">
                  <div className="col-xs-12 center-xs">
                    <h1>Portfolio</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 center-xs">
                    <h3 className="quotes">
                      <span className="marks">"</span>Your work is going to fill
                      a large part of your life, and the only way to be truly
                      satisfied is to do what you believe is great work. And the
                      only way to do great work is to love what you do. If you
                      haven’t found it yet, keep looking and don’t settle.
                      <span className="marks">"</span>
                    </h3>
                    <h3 className="marks quotes">Steve Jobs</h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-12 center-xs">
                    <Tabs>
                      <TabList>
                        <Tab>Design</Tab>
                        <Tab>Development</Tab>
                      </TabList>

                      <TabPanel>
                        <p>Design of applications</p>
                        <div className="row">
                          {this.state.designImages.map(designImage => {
                            return (
                              <div
                                key={designImage.id}
                                className="col-lg-4 col-md-6 col-sm-6 col-xs-6"
                              >
                                <img
                                  className="design-portfolio-image"
                                  src={designImage.src}
                                  alt={designImage.alt}
                                  onClick={this.handleOpenModal}
                                ></img>
                              </div>
                            );
                          })}
                        </div>
                        <ModalImage
                          isOpen={this.state.modalImageIsOpen}
                          imageSrc={this.state.imageSrc}
                          imageAlt={this.state.imageAlt}
                        ></ModalImage>
                      </TabPanel>
                      <TabPanel>
                        <h2>Any content 2</h2>
                      </TabPanel>
                    </Tabs>
                  </div>
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
