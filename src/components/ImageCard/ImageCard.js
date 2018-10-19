import React from "react";
import "./FriendCard.css";

const ImageCard = props => (

  <div className="card float-left">
  <img className="card-img-top" src={props.image} alt={props.name} />
  </div>
);

export default ImageCard;
