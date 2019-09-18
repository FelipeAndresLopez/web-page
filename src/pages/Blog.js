import React from "react";
import "./css/Blog.css";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div id="blog" className="bkg-img bkg-6 full-page">
          <div className="bkg-rec full-page">
            <div className="main-content"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
