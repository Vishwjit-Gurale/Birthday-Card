import React from "react";
import "./card.css";
function Card({ img, name, age }) {
  return (
    <div className="card">
      <div>
        <figure
          className="img"
          style={{ backgroundImage: `url(${img})` }}
        ></figure>
      </div>
      <div className="heading">
        <h5>{name}</h5>
        <h6>Age- {age}</h6>
      </div>
    </div>
  );
}

export default Card;
