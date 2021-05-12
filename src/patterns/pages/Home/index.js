import React from 'react';

import philipPhoto from '@assets/images/home/photo-felipe-1.jpg';
import facebookIcon from '@assets/icons/facebook-icon.svg';
import linkedInIcon from '@assets/icons/linkedIn-icon.svg';
import githubIcon from '@assets/icons/github-icon.svg';
import './styles.css';

import smallBkg from '@assets/images/backgrounds/home/small.jpg';
import mediumBkg from '@assets/images/backgrounds/home/medium.jpg';
import largeBkg from '@assets/images/backgrounds/home/large.jpg';

import { PageContainer } from '@patterns/organisms/PageContainer';

const Home = () => (
  <>
    {/* <picture className="bkg-img bkg-1 full-page">
      <source media="(min-width: 1024px)" srcSet={largeBkg} />
      <source media="(min-width: 800px)" srcSet={mediumBkg} />
      <img src={smallBkg} alt="" /> */}

    <PageContainer>
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
            I
                <span className="marks">'</span>
                m
              </h1>
          <h1>
            Felipe López
                <span className="marks">.</span>
          </h1>
          <h4 className="align-center">
            JavaScript developer
                <span className="marks"> &gt;&gt; </span>
                Frontend developer
                <span className="marks"> &gt;&gt; </span>
                React developer
              </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 center-xs">
          <div className="icons-container">
            <a href="https://www.linkedin.com/in/felipe-andres-lopez" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="linkedin-icon" />
            </a>

            <a href="https://github.com/FelipeAndresLopez" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="github-icon" />
            </a>

            <a href="https://www.facebook.com/felipeandreslopezm" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="facebook-icon" />
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  </>
);

export default Home;
