import React from 'react';
import { string, node } from 'prop-types';
import './css/Card.css';

const Card = (props) => {
  const {
    photo,
    caption,
    alt,
    children
  } = props;
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          <div className="card">
            <div className="card-photo">
              <img src={photo} alt={alt} />
              <div className="text-block">
                <p>{caption}</p>
              </div>
            </div>
            <div className="card-content">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  photo: '',
  caption: 'Image',
  alt: 'An image',
  children: null
};

Card.propTypes = {
  photo: string,
  caption: string,
  alt: string,
  children: node
};

export default Card;
