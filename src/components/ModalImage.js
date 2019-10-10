import React from "react";
import ReactDOM from "react-dom";

import "./css/ModalImage.css";

class ModalImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      this.onOpenModal();
    }
  }

  onOpenModal = () => {
    document.getElementById("modalImage").style.display = "block";
    document.getElementById("image").src = this.props.imageSrc;
    document.getElementById("caption").innerHTML = this.props.imageAlt;
  };

  onCloseModal = () => {
    document.getElementById("modalImage").style.display = "none";
  };

  render() {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div id="modalImage" className="modal">
          <span className="close" onClick={this.onCloseModal}>
            &times;
          </span>
          <img className="modal-content" alt="Imagen modal" id="image"></img>
          <div id="caption"></div>
        </div>
      </React.Fragment>,
      document.getElementById("modal-images")
    );
  }
}

export default ModalImage;
