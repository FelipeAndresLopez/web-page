import React from 'react';

import { Card } from '@patterns/molecules/Card/Card.jsx';
import { CircleAvatar } from '@patterns/atoms/CircleAvatar/CircleAvatar.jsx';
import { PrimaryTitle } from '@patterns/atoms/PrimaryTitle/PrimaryTitle.jsx';

import philipPhoto from '@assets/images/blog/foto-felipe-2.jpg';
import rockMusic from '@assets/images/blog/rock-music.jpg';
import philipOnBike from '@assets/images/blog/riding-on-bike.jpg';
import hatosReservoir from '@assets/images/blog/hatos-reservoir.jpg';
import './styles.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="blog" className="bkg-img bkg-6 full-page">
          <div className="full-page">
            <div className="main-content">
              <div className="row">
                <div className="col-xs-12 center-xs">
                  <PrimaryTitle>Blog</PrimaryTitle>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                  <div className="card gratefulness-card">
                    <CircleAvatar imageUrl={philipPhoto} />
                    <div className="card-content">
                      <h3 className="quotes small-quotes white">
                        <span className="marks">&quot;</span>
                        First of all, thank you
                        from my heart for dedicating a bit of your time to visit
                        this web site and read this blog, I'm sure we have
                        interests in common and It would be great share
                        something of them together
                        <span className="marks">&quot;</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                  <h3>Interests</h3>
                </div>
              </div>

              <Card photoUrl={rockMusic} alt="Rock music" caption="Rock band">
                <h4>Do you like rock music?</h4>
                <p>
                  Play the guitar is one of things that I enjoy to do. Did you
                  know that play an instrument, gives you some skills?
                </p>
                <ul className="blue-bullets">
                  <li>Improve memory</li>
                  <li>Acquire discipline</li>
                  <li>Reduce stress</li>
                  <li>Acquire coordination</li>
                </ul>
              </Card>

              <Card
                photoUrl={philipOnBike}
                alt="Neusa's reservoir"
                caption="Neusa's reservoir"
              >
                <h4>Let's ride on bike together</h4>
                <p>On bike I've gone through some towns:</p>

                <ul className="blue-bullets three-colums">
                  <li>Villa de Leyva</li>
                  <li>Sáchica</li>
                  <li>Sutamarchán</li>
                  <li>Tinjacá</li>
                  <li>Ráquira</li>
                  <li>Chiquinquirá</li>
                  <li>Guachetá</li>
                  <li>Cucunubá</li>
                  <li>Carmen de Carupa</li>
                  <li>Lenguazaque</li>
                  <li>Suesca</li>
                  <li>Chocontá</li>
                  <li>Neusa's reservoir</li>
                  <li>Hato's reservoir</li>
                  <li>Guargua's wasteland</li>
                  <li>Fúquene</li>
                  <li>Susa</li>
                  <li>Capellanía</li>
                </ul>
              </Card>

              <Card
                photoUrl={hatosReservoir}
                alt="Hato's reservoir"
                caption="Hato's reservoir"
              >
                <h4>Discover unbelievable places </h4>
                <p>
                  The hiking takes you to the most beautiful landscapes that you
                  can't imagine. I invite you to visit the Hato's reservoir.
                  There, you will be able to:
                </p>
                <ul className="blue-bullets">
                  <li>Camping</li>
                  <li>Sail on a boat</li>
                  <li>Make a picnic</li>
                </ul>
              </Card>

              <div className="row">
                <div className="col-xs-12">
                  <h3>Contact</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <p>
                    Let me know if I can help you with something, or you would
                    like to work together in some amazing projects.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <p>
                    E-mail:
                    <b> felipeandreslopez91@gmail.com</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
