import React from "react";

import "./css/Home.css";
import philipPhoto from "./images/home/foto-felipe-1.jpg";
import facebookIcon from "./images/icons/facebook-icon.svg";
import linkedInIcon from "./images/icons/linkedin-icon.svg";
import githubIcon from "./images/icons/github-icon.svg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="home" className="bkg-img bkg-1 full-page">
          <div className="bkg-rec full-page">
            <div className="main-content">
              <div className="row">
                <div className="col-xs-12">
                  <div className="photo-circle">
                    <img src={philipPhoto} alt="Felipe López" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 center-xs">
                  <h1>
                    I<span className="marks">'</span>m
                  </h1>
                  <h1>
                    Felipe López<span className="marks">.</span>
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
                      rel="noopener noreferrer"
                    >
                      <img src={linkedInIcon} alt="linkedin-icon" />
                    </a>

                    <a
                      href="https://github.com/FelipeAndresLopez"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={githubIcon} alt="github-icon" />
                    </a>

                    <a
                      href="https://www.facebook.com/felipeandreslopezm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={facebookIcon} alt="facebook-icon" />
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
