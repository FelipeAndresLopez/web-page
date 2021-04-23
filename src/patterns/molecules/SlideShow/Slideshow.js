import React from "react";

import "./css/Slideshow.css";

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1
    };
  }

  componentDidMount() {
    this.showSlides();
  }

  componentDidUpdate(slideNum) {
    this.showSlides();
  }

  onChangeSlide = slideNum => {
    let slideIndex = this.state.slideIndex;
    this.setState({ slideIndex: (slideIndex += slideNum) });
  };

  currentSlide = slideNum => {
    this.setState({ slideIndex: slideNum });
  };

  showSlides = () => {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    let slideIndex = this.state.slideIndex;

    if (slideIndex > slides.length) {
      slideIndex = 1;
      this.setState({ slideIndex: 1 });
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
      this.setState({ slideIndex: slides.length });
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-12">
            <br></br>
            <div className="slideshow-container">
              {this.props.images.map((image, index) => {
                return (
                  <div className="slide fade" key={image.id}>
                    <div className="numbertext">
                      {index + 1} / {this.props.images.length}
                    </div>
                    <img src={image.src} alt={image.src}></img>
                    <div className="slide-caption">{image.alt}</div>
                  </div>
                );
              })}

              <button className="prev" onClick={() => this.onChangeSlide(-1)}>
                &#10094;
              </button>
              <button className="next" onClick={() => this.onChangeSlide(1)}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-xs-12">
            <div className="dots-container">
              {this.props.images.map((image, index) => {
                return (
                  <span
                    key={image.id}
                    className="dot"
                    onClick={() => this.currentSlide(index + 1)}
                  ></span>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Slideshow;
