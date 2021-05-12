import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <React.Fragment>
      <div className="bkg-7 full-page">
        <div className="bkg-rec full-page">
          <div className="main-content">
            <div className="row">
              <div className="col-xs-12 center-xs">
                <h1 className="error-404">404</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 center-xs">
                <p className="error-message">
                  This is not the web page you are looking for
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 center-xs">
                <Link to="./">
                  <button className="btn-primary">GO TO HOME</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
