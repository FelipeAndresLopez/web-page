import React from 'react';
import ReactDOM from 'react-dom';

import './ModalImage.css';

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
    document.getElementById('modalImage').style.display = 'block';
    document.getElementById('image').src = this.props.imageSrc;
    document.getElementById('caption').innerHTML = this.props.imageAlt;
  };

  onCloseModal = () => {
    document.getElementById('modalImage').style.display = 'none';
  };

  render() {
    return ReactDOM.createPortal(
      <>
        <div id="modalImage" className="modal">
          <button type="button" className="close" onClick={this.onCloseModal}>
            &times;
          </button>
          <img className="modal-content" alt="modal" id="image" />
          <div id="caption" />
        </div>
      </>,
      document.getElementById('modal-images')
    );
  }
}

export default ModalImage;
