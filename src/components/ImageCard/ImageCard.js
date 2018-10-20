import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
<div className="card-container">
  <div className="card float-left">
  <span onClick={() => props.selectImage(props.id)}>
  <img className="card-img-top content img-container" src={props.image} alt={props.name} />
  </span>
  </div>
  </div>
);

export default ImageCard;
