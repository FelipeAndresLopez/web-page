import React from "react";
import "./css/Portfolio.css";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div id="portfolio" className="bkg-img bkg-5 full-page">
          <div className="bkg-rec full-page">
            <div className="main-content"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
