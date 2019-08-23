import React from "react";

import "./css/Home.css";
import foto from "./images/felipe-1.jpg";
import facebookIcon from "./images/facebook-icon.svg";
import linkedInIcon from "./images/linkedin-icon.svg";
import githubIcon from "./images/github-icon.svg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="home" className="bkg-img bkg-1 full-page">
          <div className="bkg-rec full-page">
            <div className="main-content">
              <div className="row">
                <div className="col-xs-12">
                  <div className="img-circle">
                    <img src={foto} alt="Felipe López - Foto" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 center-xs">
                  <h1>
                    I<span>'</span>m
                  </h1>
                  <h1>
                    Felipe López<span>.</span>
                  </h1>
                  <h4 className="align-center">Full stack web developer</h4>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 center-xs">
                  <div className="icons-container">
                    <a
                      href="https://www.linkedin.com/in/felipe-andres-lopez"
                      target="_blank"
                    >
                      <div className="icon-circle">
                        <img src={linkedInIcon} alt="linkedin-icon" />
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/felipe-andres-lopez"
                      target="_blank"
                    >
                      <div className="icon-circle">
                        <img src={githubIcon} alt="github-icon" />
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/felipe-andres-lopez"
                      target="_blank"
                    >
                      <div className="icon-circle">
                        <img src={facebookIcon} alt="facebook-icon" />
                      </div>
                    </a>
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

export default Home;
