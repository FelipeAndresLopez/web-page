import React from 'react';
import { string, node } from 'prop-types';

import './Card.css';

export const Card = (props) => {
  const {
    photoUrl,
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
              <img src={photoUrl} alt={alt} />
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
  photoUrl: '',
  caption: 'Image',
  alt: 'An image',
  children: null
};

Card.propTypes = {
  photoUrl: string,
  caption: string,
  alt: string,
  children: node
};
