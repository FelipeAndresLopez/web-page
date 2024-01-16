import React from 'react';

import felipeAvatar from '@assets/images/home/foto-felipe.jpeg';
import facebookIcon from '@assets/icons/facebook-icon.svg';
import linkedInIcon from '@assets/icons/linkedin-icon.svg';
import githubIcon from '@assets/icons/github-icon.svg';
import { PageContainer } from '@patterns/organisms/PageContainer';
import { CircleAvatar } from '@patterns/atoms/CircleAvatar/CircleAvatar.jsx';
import { PrimaryTitle } from '@patterns/atoms/PrimaryTitle/PrimaryTitle.jsx';
import './styles.css';

const Home = () => (
  <>
    <PageContainer>
      <div className="row">
        <div className="col-xs-12">
          <CircleAvatar imageUrl={felipeAvatar} />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-xs-12 center-xs">
          <PrimaryTitle>
            I
            <span className="marks">'</span>
            m
            <br />
            Felipe Andrés López
            <span className="marks">.</span>
          </PrimaryTitle>
          <h4 className="align-center">
            Web UI Developer
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
