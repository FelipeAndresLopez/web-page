import React from "react";
import "./css/Card.css";

function Card(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-xs-12">
          <div className="card">
            <div className="card-photo">
              <img src={props.photo} alt={props.alt} />
              <div className="text-block">
                <p>{props.caption}</p>
              </div>
            </div>
            <div className="card-content">{props.children}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
